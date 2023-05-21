import { StarFill, StarHalf } from "react-bootstrap-icons"

interface IRating {
  rating: number
}

function StarRating(props: IRating) {
  const { rating } = props
  const filledStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStar = halfStar ? 5 - filledStars - 1 : 5 - filledStars

  let stars = []
  const starStyle = { color: "#faca15" }
  const emptyStarStyle = { color: "#D9D9D9" }

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFill style={starStyle} />)
  }

  if (halfStar) {
    stars.push(<StarHalf style={starStyle} />)
  }

  for (let i = 0; i < emptyStar; i++) {
    stars.push(<StarFill style={emptyStarStyle} />)
  }

  return <>{stars}</>
}

export default StarRating
