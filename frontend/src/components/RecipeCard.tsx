import { Card } from "react-bootstrap";

import "../styles/RecipeCard.css";
import { StarFill } from "react-bootstrap-icons";
import { Recipe } from "../view/HomeView";

export interface RecipeCardProps {
  item: Recipe;
}

function RecipeCard(props: RecipeCardProps) {
  const { item } = props;

  return (
    <Card className="RecipeCard">
      <Card.Img variant="top" src={item.image} className="RecipeCard-image" />
      <div className="RecipeCard-body">
        <h4 className="RecipeCard-title h4"> {item.name}</h4>
        <div className="RecipeCard-rating">
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
        </div>
        <Card.Text className="RecipeCard-cal pMed">{item.kcal} kcal</Card.Text>
      </div>
    </Card>
  );
}

export default RecipeCard;
