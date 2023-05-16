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
});
client.connect();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/recipes", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query("SELECT * FROM recipes");
    console.log("rows", rows);
    response.status(200).send(rows);
}));
// const { rows } = await client.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
app.get("/login", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const email = request.query.email;
    const password = request.query.password;
    const { rows } = yield client.query("SELECT * FROM users");
    if (email && password) {
        const loggedInUser = rows.find((item) => item.email === email && item.password === password);
        if (loggedInUser) {
            console.log("inloggad");
            response.status(200).send("success");
        }
        else {
            console.log("fel lösen eller användarnamn");
            response.status(401).send("Unauthorized");
        }
    }
    else {
        console.log("errr");
        response.status(400).send("email or password has not been added");
    }
}));
app.listen(8085, () => {
    console.log("Server is running on port 8085");
});
