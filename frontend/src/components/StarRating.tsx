import { StarFill, Star, StarHalf } from "react-bootstrap-icons"

interface IRating {
  rating: number
}

function StarRating(props: IRating) {
  const { rating } = props
  const filledStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStar = halfStar ? 5 - filledStars - 1 : 5 - filledStars

  let stars = []

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFill />)
  }

  if (halfStar) {
    stars.push(<StarHalf />)
  }

  for (let i = 0; i < emptyStar; i++) {
    stars.push(<Star />)
  }

  return <div className="RecipeCard-rating"> {stars} </div>
}

export default StarRating
