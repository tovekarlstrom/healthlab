import { Recipe } from "../view/HomeView"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../styles/RecipeCarousel.css"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons"

function CheckWindowWidth() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function windowResize() {
      setwindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", windowResize)
    windowResize()
    return () => window.removeEventListener("resize", windowResize)
  }, [])
  return windowWidth
}

export default function RecipeCarousel() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const width = CheckWindowWidth()
  let slides = 1

  if (width > 700) {
    slides = 2
  }

  useEffect(() => {
    fetch("http://localhost:8085/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((result) => {
        setRecipes(result)
      })
      .catch((error) => {
        console.log("Error:", error.message)
      })
  }, [])

  return (
    <div className="recipeCarousel">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        dragEnabled={false}
        touchEnabled={false}
        visibleSlides={slides}
        className="carouselProvider"
      >
        <Slider className="recipeSlider">
          {recipes.map((item) => (
            <Slide index={item.id - 1} key={item.id} className="recipeSlide">
              <Link to={`/recipe/${item.name}`}>
                <RecipeCard item={item} />
              </Link>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="carouselButton back">
          <ChevronLeft />
        </ButtonBack>
        <ButtonNext className="carouselButton next">
          <ChevronRight />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}
