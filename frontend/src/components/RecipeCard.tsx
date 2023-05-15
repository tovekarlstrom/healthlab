import { Card } from "react-bootstrap";
import testImage from "../images/test.jpg";
import "../styles/RecipeCard.css";
import { StarFill } from "react-bootstrap-icons";
import { Recipe } from "../view/HomeView";

// interface RecipeCardProps {
//   title: string
//   image: string
//   rating: number
//   calories: number
// }

// function RecipeCard(props: RecipeCardProps) {
//   return (
//     <Card>
//       <Card.Img variant="top" src={props.image} className="RecipeCard-image" />
//       <div className="RecipeCard-body">
//         <Card.Title className="RecipeCard-title"> {props.title}</Card.Title>
//         <div className="RecipeCard-rating">
//           <StarFill />
//           <StarFill />
//           <StarFill />
//           <StarFill />
//           <StarFill />
//         </div>
//         <Card.Text className="RecipeCard-cal"> {props.calories} </Card.Text>
//       </div>
//     </Card>
//   )
// }

export interface RecipeCardProps {
  item: Recipe;
}
function RecipeCard(props: RecipeCardProps) {
  const { item } = props;
  return (
    <Card className="RecipeCard">
      <Card.Img variant="top" src={testImage} className="RecipeCard-image" />
      <div className="RecipeCard-body">
        <Card.Title className="RecipeCard-title h2"> {item.name}</Card.Title>
        <div className="RecipeCard-rating">
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
        </div>
        <Card.Text className="RecipeCard-cal pMed">
          {" "}
          {item.kcal} kcal{" "}
        </Card.Text>
      </div>
    </Card>
  );
}

export default RecipeCard;
