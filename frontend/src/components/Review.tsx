import StarRating from "./StarRating"
import "../styles/Review.css"

interface reviewProps {
  name: string
  comment: string
  rating: number
  image: string
}

function Review(props: reviewProps) {
  return (
    <>
      <span className="Review-divider"></span>
      <div className="Review-body">
        <div className="Review-image-wrapper">
          <img
            className="Review-image"
            src={props.image}
            alt="profile thumbnail"
          />
        </div>
        <div className="Review-content">
          <div className="Review-stars">
            <StarRating rating={props.rating} />
          </div>
          <p className="pBig ReviewName"> {props.name} </p>
          <p style={{ fontSize: "16px" }}> {props.comment} </p>
        </div>
      </div>
    </>
  )
}

export default Review
