import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";
import cors from "cors";
import { request } from "http";

dotenv.config();
const client = new Client({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  ssl: true,
});
client.connect();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/recipes", async (request, response) => {
  const { rows } = await client.query("SELECT * FROM recipes");
  console.log("rows", rows);
  response.status(200).send(rows);
});
app.get("/recipes/:recipeName", async (request, response) => {
  const { recipeName } = request.params;
  const { rows } = await client.query("SELECT * FROM recipes WHERE name = $1", [
    recipeName,
  ]);
  console.log("rows", rows);
  response.status(200).send(rows);
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const { rows } = await client.query("SELECT * FROM users");
  console.log("rows", rows);
  if (email && password) {
    const loggedInUser = rows.find(
      (item) => item.email === email && item.password === password
    );
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      console.log("inloggad");
      response.status(200).send(loggedInUser);
    } else {
      console.log("fel lösen eller användarnamn");
      response.status(401).send("Unauthorized");
    }
  } else {
    console.log("errr");
    response.status(400).send("email or password has not been added");
  }
});

app.post("/register", async (request, response) => {
  const { full_name, email, password } = request.body;

  const { rows } = await client.query("SELECT * FROM users");
  if (full_name && email && password) {
    const loggedInUser = rows.find((item) => item.email === email);
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      response.status(409).send("Conflict account already exists");
    } else {
      const insertQuery = {
        text: "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)",
        values: [full_name, email, password],
      };
      const registerAccount = await client.query(insertQuery);
      console.log("registerAccount", registerAccount);
      response.status(200).send("succes");
    }
  } else {
    response
      .status(400)
      .send('"full_name, email or password has not been added"');
  }
});

const port = process.env.PORT || 8085;
app.listen(8085, () => {
  console.log(`Server is running on port ${port}`);
});
