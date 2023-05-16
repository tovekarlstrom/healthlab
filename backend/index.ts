import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";
import cors from "cors";

dotenv.config();
const client = new Client({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
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
// const { rows } = await client.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
app.get("/login", async (request, response) => {
  const email = request.query.email;
  const password = request.query.password;
  const { rows } = await client.query("SELECT * FROM users");
  if (email && password) {
    const loggedInUser = rows.find(
      (item) => item.email === email && item.password === password
    );
    if (loggedInUser) {
      console.log("inloggad");
      response.status(200).send("success");
    } else {
      console.log("fel lösen eller användarnamn");
      response.status(401).send("Unauthorized");
    }
  } else {
    console.log("errr");
    response.status(400).send("email or password has not been added");
  }
});

app.listen(8085, () => {
  console.log("Server is running on port 8085");
});
