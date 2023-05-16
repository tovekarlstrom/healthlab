import { useState, useEffect } from "react"
import RecipeCard from "../components/RecipeCard"
import Info from "../components/Info"
import Hero from "../components/Hero"

import { Link } from "react-router-dom"
import "../styles/HomeView.css"
export interface Recipe {
  id: number
  name: string
  rating: number
  time: number
  likes: number
  comments: number
  protein: number
  carbs: number
  fat: number
  kcal: number
  ingredients: [string]
  instructions: [string]
}
function Home() {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null)
  useEffect(() => {
    fetch("http://localhost:8085/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((result) => {
        console.log(result)
        setRecipes(result)
      })
      .catch((error) => {
        console.log("Error:", error.message)
      })
  }, [])
  return (
    <div>
      <Hero />
      <Link to={`/loggin`}>
        <button className="logginButton">logga in</button>
      </Link>
      {recipes !== null && (
        <div>
          {recipes.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      )}
      <Info />
    </div>
  )
}

export default Home
