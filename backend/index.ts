import dotenv from "dotenv"
import express from "express"
import { Client } from "pg"
import cors from "cors"
import { request } from "http"
import { log } from "console"

dotenv.config()
const client = new Client({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  ssl: true,
})
client.connect()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/recipes", async (request, response) => {
  const { rows } = await client.query("SELECT * FROM recipes")
  console.log("rows", rows)
  response.status(200).send(rows)
})
app.get("/recipes/:recipeName", async (request, response) => {
  const { recipeName } = request.params
  const { rows } = await client.query("SELECT * FROM recipes WHERE name = $1", [
    recipeName,
  ])
  console.log("rows", rows)
  response.status(200).send(rows)
})

app.post("/login", async (request, response) => {
  const { email, password } = request.body

  const { rows } = await client.query("SELECT * FROM users")
  console.log("rows", rows)
  if (email && password) {
    const loggedInUser = rows.find(
      (item) => item.email === email && item.password === password
    )
    console.log("loggedInUser", loggedInUser)
    if (loggedInUser) {
      console.log("inloggad")
      response.status(200).send("success")
    } else {
      console.log("fel lösen eller användarnamn")
      response.status(401).send("Unauthorized")
    }
  } else {
    console.log("errr")
    response.status(400).send("email or password has not been added")
  }
})

app.post("/register", async (request, response) => {
  const { full_name, email, password } = request.body

  const { rows } = await client.query("SELECT * FROM users")
  if (full_name && email && password) {
    const loggedInUser = rows.find((item) => item.email === email)
    console.log("loggedInUser", loggedInUser)
    if (loggedInUser) {
      response.status(409).send("Conflict account already exists")
    } else {
      const insertQuery = {
        text: "INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)",
        values: [full_name, email, password],
      }
      const registerAccount = await client.query(insertQuery)
      console.log("registerAccount", registerAccount)
      response.status(200).send("succes")
    }
  } else {
    response
      .status(400)
      .send('"full_name, email or password has not been added"')
  }
})

app.post("/likes", async (request, response) => {
  const { user_id } = request.body
  let { rows } = await client.query("SELECT * FROM likes WHERE user_id = $1", [
    user_id,
  ])

  response.send(rows)
})

app.post("/recipes/:recipeName", async (request, response) => {
  const { recipe_id, user_id } = request.body

  const values = [recipe_id, user_id]
  const query = "SELECT * FROM likes WHERE recipe_id = $1 AND user_id = $2"

  const insertQuery = "INSERT INTO likes (recipe_id, user_id) VALUES ($1, $2)"

  const delQuery = "DELETE FROM likes WHERE recipe_id = $1 AND user_id = $2"

  if (recipe_id && user_id) {
    let { rows } = await client.query(query, values)

    if (rows.length > 0) {
      // exists, remove from liked
      const removeLike = await client.query(delQuery, values)
      let { rows } = await client.query("SELECT * FROM likes")

      const addLike = await client.query(
        "UPDATE recipes SET likes = likes - 1 WHERE id =$1",
        [recipe_id]
      )

      response.status(200).send(false)
    } else {
      // add to like
      const saveLike = await client.query(insertQuery, values)
      let { rows } = await client.query("SELECT * FROM likes")

      const addLike = await client.query(
        "UPDATE recipes SET likes = likes + 1 WHERE id =$1",
        [recipe_id]
      )

      response.status(200).send(true)
    }
  } else {
    response.status(400).send("error: missing id")
  }
})

const port = process.env.PORT || 8085
app.listen(8085, () => {
  console.log(`Server is running on port ${port}`)
})
