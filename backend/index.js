"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const client = new pg_1.Client({
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    ssl: true,
});
client.connect();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/recipes", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query("SELECT * FROM recipes");
    response.status(200).send(rows);
}));
app.get("/recipes/:recipeName", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipeName } = request.params;
    const { rows } = yield client.query("SELECT * FROM recipes WHERE name = $1", [
        recipeName,
    ]);
    response.status(200).send(rows);
}));
app.post("/login", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    const { rows } = yield client.query("SELECT * FROM users");
    if (email && password) {
        const loggedInUser = rows.find((item) => item.email === email && item.password === password);
        console.log("loggedInUser", loggedInUser);
        if (loggedInUser) {
            response.status(200).send(loggedInUser);
        }
        else {
            response
                .status(401)
                .send({ id: "", full_name: "", email: "", password: "" });
        }
    }
    else {
        response.status(400).send("email or password has not been added");
    }
}));
app.post("/register", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { full_name, email, password, img } = request.body;
    const { rows } = yield client.query("SELECT * FROM users");
    if (full_name && email && password) {
        const loggedInUser = rows.find((item) => item.email === email);
        console.log("loggedInUser", loggedInUser);
        if (loggedInUser) {
            response
                .status(409)
                .send({ id: "", full_name: "", email: "", password: "" });
        }
        else {
            const insertQuery = {
                text: "INSERT INTO users (full_name, email, password, img) VALUES ($1, $2, $3, $4)",
                values: [full_name, email, password, img],
            };
            const registerAccount = yield client.query(insertQuery);
            if (registerAccount) {
                const { rows } = yield client.query("SELECT * FROM users WHERE email = $1", [email]);
                const registeredUser = rows[0];
                console.log("registeredUser", registeredUser);
                response.status(200).send(registeredUser);
            }
            else {
                response
                    .status(400)
                    .send('"full_name, email or password has not been added"');
            }
        }
    }
    else {
        response
            .status(400)
            .send('"full_name, email or password has not been added"');
    }
}));
app.post("/likes", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = request.body;
    const { rows } = yield client.query("SELECT * FROM likes WHERE user_id = $1", [user_id]);
    response.send(rows);
}));
app.get("/likedRecipes/:user_id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = request.params;
    const { rows } = yield client.query("SELECT * FROM likes WHERE user_id = $1", [user_id]);
    if (rows.length > 0) {
        const recipeIds = rows.map((item) => item.recipe_id);
        const result = yield client.query("SELECT * FROM recipes WHERE id = ANY($1)", [recipeIds]);
        const likedRecipes = result.rows;
        response.send(likedRecipes);
    }
}));
app.get("/comments/:recipe_id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipe_id } = request.params;
    const query = `
  SELECT c.id, c.recipe_id, c.user_id, c.comment, c.rating, u.full_name, u.img
  FROM comments c
  JOIN users u ON c.user_id = u.id
  WHERE c.recipe_id = $1
`;
    const { rows } = yield client.query(query, [recipe_id]);
    if (rows) {
        console.log("rows", rows);
        response.status(200).json(rows);
    }
    else {
        response.status(201).send("no added comment");
    }
}));
app.post("/comments", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipe_id, user_id, comment, rating } = request.body;
    console.log(recipe_id);
    console.log(user_id);
    console.log(comment);
    console.log(rating);
    const { rows } = yield client.query("SELECT * FROM comments");
    if (rows) {
        console.log("fe", rows);
    }
    else {
        console.log("hej");
    }
    if (recipe_id && user_id && comment) {
        const insertComment = {
            text: "INSERT INTO comments (recipe_id, user_id, comment, rating) VALUES ($1, $2, $3, $4)",
            values: [recipe_id, user_id, comment, rating],
        };
        const addRecipeComment = yield client.query(insertComment);
        if (addRecipeComment) {
            response.status(200).json(addRecipeComment);
        }
        else {
            response.status(400).send("Comment where not added correctly");
        }
    }
}));
app.get("/likes", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query("SELECT * FROM likes");
    response.send(rows);
}));
app.post("/recipes/:recipeName", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipe_id, user_id } = request.body;
    const values = [recipe_id, user_id];
    const query = "SELECT * FROM likes WHERE recipe_id = $1 AND user_id = $2";
    const insertQuery = "INSERT INTO likes (recipe_id, user_id) VALUES ($1, $2)";
    const delQuery = "DELETE FROM likes WHERE recipe_id = $1 AND user_id = $2";
    if (recipe_id && user_id) {
        let { rows } = yield client.query(query, values);
        if (rows.length > 0) {
            // exists, remove from liked
            const removeLike = yield client.query(delQuery, values);
            const addLike = yield client.query("UPDATE recipes SET likes = likes - 1 WHERE id =$1", [recipe_id]);
            response.status(200).send(false);
        }
        else {
            // add to like
            const saveLike = yield client.query(insertQuery, values);
            const addLike = yield client.query("UPDATE recipes SET likes = likes + 1 WHERE id =$1", [recipe_id]);
            response.status(200).send(true);
        }
    }
    else {
        response.status(400).send({ error: "missing id" });
    }
}));
const port = process.env.PORT || 8085;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
