import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

interface IRating {
  rating: number;
  setRating: (rating: number) => void;
}

function ClickStarRating(props: IRating) {
  const { rating, setRating } = props;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStar = halfStar ? 5 - filledStars - 1 : 5 - filledStars;

  let stars = [];
  const starStyle = { color: "#faca15" };

  function clickRating(clickedStar: number) {
    const newRating = clickedStar + 1;
    setRating(newRating);
  }

  for (let i = 0; i < filledStars; i++) {
    stars.push(<StarFill key={i} style={starStyle} />);
  }

  for (let i = 0; i < emptyStar; i++) {
    stars.push(
      <Star
        onClick={() => {
          clickRating(filledStars + i);
        }}
        key={5 - i}
        style={starStyle}
      />
    );
  }
  console.log(stars);
  return <>{stars}</>;
}

export default ClickStarRating;
