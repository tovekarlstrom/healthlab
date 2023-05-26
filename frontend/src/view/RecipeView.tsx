import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Recipe } from "./HomeView";
import ArrowButton from "../components/ArrowButton";
import ClickStarRating from "../components/ClickStarRating";
import StarRating from "../components/StarRating";
import "../styles/RecipeView.css";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";

import {
  Clock,
  Heart,
  HeartFill,
  ChatText,
  Bag,
  SendFill,
} from "react-bootstrap-icons";
import Review from "../components/Review";
import MicroNutrients from "../components/MicroNutrients";
import { LoggedInContext } from "../LoggedInContext";

interface likeInteface {
  id: number;
  recipe_id: number;
  user_id: number;
}
interface commentInteface {
  id: number;
  recipe_id: number;
  user_id: number;
  comment: string;
  rating: number;
  full_name: string;
}

function RecipeView() {
  const { recipeName } = useParams();
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [likeArray, setLikeArray] = useState<likeInteface[]>([]);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const [allComments, setAllComments] = useState<commentInteface[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8085/recipes/${recipeName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setRecipe(result[0]);
        setLikeCount(result[0].likes);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);

  //get likes if logged in
  useEffect(() => {
    if (loggedIn && typeof loggedIn.id === "number") {
      fetch("http://localhost:8085/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: loggedIn.id }),
      })
        .then((response) => response.json())
        .then((result) => {
          setLikeArray(result);
        });
    }
  }, []);

  // check if already liked
  useEffect(() => {
    if (recipe && likeArray.length > 0) {
      const alreadyLiked = likeArray.some(
        (item) => item.recipe_id === recipe.id
      );
      setLike(alreadyLiked);
    }
  }, [likeArray]);

  async function handleLike() {
    if (recipe && loggedIn) {
      const response = await fetch(
        `http://localhost:8085/recipes/${recipeName}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            recipe_id: recipe.id,
            user_id: loggedIn.id,
          }),
        }
      );
      const result = await response.json();
      if (result) {
        setLikeCount(likeCount + 1);
      } else if (result === false) {
        setLikeCount(likeCount - 1);
      }
      setLike(result);
    }
  }
  async function uploadReview() {
    if (recipe && loggedIn) {
      const response = await fetch(`http://localhost:8085/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipe_id: recipe.id,
          user_id: loggedIn.id,
          comment: comment,
          rating: rating,
        }),
      });
      if (response.ok) {
        const newComment = {
          id: -1,
          recipe_id: recipe.id,
          user_id: Number(loggedIn.id),
          comment: comment,
          rating: rating,
          full_name: loggedIn.full_name,
        };
        setAllComments((prevComments) => [...prevComments, newComment]);
        console.log("Comment added successfully");
      } else {
        console.log("Failed to add comment");
      }
    }
  }

  useEffect(() => {
    if (recipe) {
      fetch(`http://localhost:8085/comments/${recipe.id}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setAllComments(result.reverse());
        });
    }
  }, [recipe]);

  function imgPicker() {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const randomeIndex = Math.floor(Math.random() * images.length);
    const randomeImage = images[randomeIndex];
    return randomeImage;
  }

  return (
    <div>
      {recipe !== null && (
        <div>
          <ArrowButton />
          <div
            onClick={handleLike}
            className="heart"
            style={{
              backgroundColor: "rgba(249, 251, 249, 0.8)",
              position: "absolute",
              width: "50px",
              height: "50px",
              zIndex: "10",
              right: "20px",
              top: "20px",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "3px",
            }}
          >
            {!like ? (
              <Heart style={{ width: "34px", height: "32px" }} />
            ) : (
              <HeartFill
                style={{ width: "34px", height: "32px", color: "#174E2E" }}
              />
            )}
          </div>
          <img className="recipeImg" src={recipe.image} alt="recipe" />
          <div className="innerContainer">
            <div>
              <StarRating rating={recipe.rating} />
            </div>
            <h1 className="recipeH1">{recipe.name}</h1>
            <div className="infoIcons">
              <span className="iconBox">
                <Clock className="icon" />
                <p>{recipe.time}</p>
              </span>
              <span className="iconBox">
                <Heart className="icon" />
                <p>{likeCount}</p>
              </span>
              <span className="iconBox">
                <ChatText className="icon" />
                <p>{recipe.comments}</p>
              </span>
            </div>

            <span style={{ margin: "20px 0px 20px 0px" }}>
              <MicroNutrients
                carbs={recipe.carbs}
                fat={recipe.fat}
                protein={recipe.protein}
                kcal={recipe.kcal}
              />
            </span>

            <div className="greenIconBox">
              <Bag className="iconBag" />
            </div>
            <h2 className="recipeH2">Ingredienser</h2>
            <ul className="recipeDetails ingredients">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="greenIconBox">
              <Clock className="IconClock" />
            </div>
            <h2 className="recipeH2">Instruktioner</h2>
            <ul className="recipeDetails">
              {recipe.instructions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="recipeReviews">
              <div className="IconHeading">
                <div className="greenIconBox">
                  <ChatText className="IconChat" />
                </div>
                <h2 className="recipeH2">Recensioner</h2>
              </div>
              <Review
                name="Jane Doe"
                rating={3.5}
                comment="Den här appen har gjort det mycket enklare att gå ner i vikt!"
                image={imgPicker()}
              />
              <Review
                name="Jane Doe"
                rating={3.5}
                comment="Den här appen har gjort det mycket enklare att gå ner i vikt!"
                image={imgPicker()}
              />
              <Review
                name="Jane Doe"
                rating={3.5}
                comment="Den här appen har gjort det mycket enklare att gå ner i vikt!"
                image={imgPicker()}
              />
              {allComments &&
                allComments.map((item) => (
                  <Review
                    key={item.id}
                    name={item.full_name}
                    rating={item.rating}
                    comment={item.comment}
                    image={imgPicker()}
                  />
                ))}
            </div>
            {loggedIn ? (
              <div className="commentBox">
                <img className="imgPick" src={imgPicker()} alt="" />
                <div className="comment">
                  <div className="stars">
                    <ClickStarRating rating={rating} setRating={setRating} />
                  </div>
                  <input
                    className="commentField"
                    type="text"
                    placeholder="Skriv en recension här..."
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  />
                </div>
                <SendFill
                  onClick={() => {
                    uploadReview();
                  }}
                />
              </div>
            ) : (
              <div className="LogginIfNot">
                <p>
                  Du måste vara inloggad för att skriva en recension,{" "}
                  <Link className="commentLink" to="/login">
                    logga in
                  </Link>{" "}
                  eller{" "}
                  <Link className="commentLink" to="/register">
                    registrera dig
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeView;
