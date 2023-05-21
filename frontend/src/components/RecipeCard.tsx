import { Card } from "react-bootstrap"
import "../styles/RecipeCard.css"
import { Recipe } from "../view/HomeView"
import StarRating from "./StarRating"

export interface RecipeCardProps {
  item: Recipe
}

function RecipeCard(props: RecipeCardProps) {
  const { item } = props

  return (
    <Card className="RecipeCard">
      <Card.Img variant="top" src={item.image} className="RecipeCard-image" />
      <div className="RecipeCard-body">
        <h3 className="RecipeCard-title h3"> {item.name}</h3>
        <div className="RecipeCard-rating">
          <StarRating rating={item.rating} />
        </div>
        <Card.Text className="RecipeCard-cal pMed">{item.kcal} kcal</Card.Text>
      </div>
    </Card>
  )
}

export default RecipeCard
