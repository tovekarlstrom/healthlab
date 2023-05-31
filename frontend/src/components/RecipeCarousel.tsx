import { Recipe } from "../view/HomeView"
import RecipeCard from "../components/RecipeCard"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"
import CarouselItem from "react-bootstrap/CarouselItem"
import { useEffect, useState } from "react"

export default function RecipeCarousel() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

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
    <div className="Carousel">
      <Carousel indicators={false}>
        {recipes.map((item) => (
          <CarouselItem>
            <Link to={`/recipe/${item.name}`} key={item.id}>
              <RecipeCard item={item} />
            </Link>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}
