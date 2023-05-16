import { Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { Recipe } from "../view/HomeView";
import testImage from "../images/test.jpg";
import "../styles/RecipeCard.css";

export interface RecipeCardProps {
  item: Recipe;
}

function RecipeCard(props: RecipeCardProps) {
  const { item } = props;

  return (
    <Card className="RecipeCard">
      <Card.Img variant="top" src={testImage} className="RecipeCard-image" />
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
