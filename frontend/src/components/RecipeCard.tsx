import { Card } from "react-bootstrap"
import testImage from "../images/test.jpg"
import "../styles/RecipeCard.css"

interface RecipeCardProps {
  title: string
  image: string
  review: number
  calories: number
}

// function RecipeCard(props: RecipeCardProps) {
//   return (
//     <Card>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Title> {props.title} </Card.Title>
//       <Card.Text> {props.calories} kcal </Card.Text>
//     </Card>
//   )
// }

function RecipeCard() {
  return (
    <Card className="RecipeCard">
      <Card.Img variant="top" src={testImage} />
      <Card.Title> titel</Card.Title>
      <Card.Text> 123 kcal </Card.Text>
    </Card>
  )
}

export default RecipeCard
