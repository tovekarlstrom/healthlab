import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";
// import cors from "cors";

dotenv.config();
const client = new Client({
  database: process.env.PGDATABASE || "",
  host: process.env.PGHOST || "",
  password: process.env.PGPASSWORD || "",
  port: parseInt(process.env.PGPORT || "5432"),
  user: process.env.PGUSER || "",
});
client.connect();

const app = express();
// app.use(cors());

async function fetchRecipes() {
  const { rows } = await client.query("SELECT * FROM recipes");
  console.log(rows);
}

fetchRecipes();

app.get("/recipes", async (request, response) => {
  const { rows } = await client.query("SELECT * FROM recipes");
  response.status(200).send(rows);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
