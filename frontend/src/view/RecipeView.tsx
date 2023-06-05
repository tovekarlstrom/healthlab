import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Recipe } from "./HomeView";
import ArrowButton from "../components/ArrowButton";
import ClickStarRating from "../components/ClickStarRating";
import StarRating from "../components/StarRating";
import "../styles/RecipeView.css";

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
  img: string;
}

function RecipeView() {
  const { recipeName } = useParams();
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [likeArray, setLikeArray] = useState<likeInteface[]>([]);
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const [allComments, setAllComments] = useState<commentInteface[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  useEffect(() => {
    fetch(`/recipes/${recipeName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setRecipe(result[0]);
        setLikeCount(result[0].likes);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, [recipeName]);

  //get likes if logged in
  useEffect(() => {
    if (loggedIn && typeof loggedIn.id === "number") {
      fetch("/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: loggedIn.id }),
      })
        .then((response) => response.json())
        .then((result) => {
          setLikeArray(result);
        });
    }
  }, [loggedIn]);

  // check if already liked
  useEffect(() => {
    if (recipe && likeArray.length > 0) {
      const alreadyLiked = likeArray.some(
        (item) => item.recipe_id === recipe.id
      );
      setLike(alreadyLiked);
    }
  }, [recipe, likeArray]);

  async function handleLike() {
    if (loggedIn && loggedIn.id === "") {
      alert("Logga in för att spara recept!");
    } else if (recipe && loggedIn) {
      const response = await fetch(`/recipes/${recipeName}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipe_id: recipe.id,
          user_id: loggedIn.id,
        }),
      });
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
      const response = await fetch(`/comments`, {
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
          img: loggedIn.img,
        };
        setAllComments((prevComments) => [...prevComments, newComment]);
        setComment("");
        setRating(0);

        console.log("Comment added successfully");
      } else {
        console.log("Failed to add comment");
      }
    }
  }

  useEffect(() => {
    if (recipe) {
      fetch(`/comments/${recipe.id}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setAllComments(
            result.sort((a: commentInteface, b: commentInteface) => a.id - b.id)
          );
        });
    }
  }, [recipe]);

  return (
    <div className="mobileContainer">
      {recipe !== null && (
        <div>
          <ArrowButton />
          <div className="innerContainer">
            <div className="recipeHero">
              <div className="imageWrapper">
                <img className="recipeImg" src={recipe.image} alt="recipe" />
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
                    cursor: "pointer",
                  }}
                >
                  {!like ? (
                    <Heart style={{ width: "34px", height: "32px" }} />
                  ) : (
                    <HeartFill
                      style={{
                        width: "34px",
                        height: "32px",
                        color: "#174E2E",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="recipeInfo">
                <div className="ratingContainer">
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
                <div className="microContainer">
                  <MicroNutrients
                    carbs={recipe.carbs}
                    fat={recipe.fat}
                    protein={recipe.protein}
                    kcal={recipe.kcal}
                  />
                </div>
              </div>
            </div>

            <div className="recipeDetailsContainer">
              <div className="instContainer">
                <div className="instTitle">
                  <div className="greenIconBox">
                    <Bag className="iconBag" />
                  </div>
                  <h2 className="recipeH2">Ingredienser</h2>
                </div>
                <ul className="recipeDetails ingredients">
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="instContainer">
                <div className="instTitle">
                  <div className="greenIconBox">
                    <Clock className="IconClock" />
                  </div>
                  <h2 className="recipeH2">Instruktioner</h2>
                </div>
                <ul className="recipeDetails">
                  {recipe.instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="recipeReviews">
              <div className="IconHeading">
                <div className="greenIconBox">
                  <ChatText className="IconChat" />
                </div>
                <h2 className="recipeH2">Recensioner</h2>
              </div>

              {allComments &&
                allComments.map((item) => (
                  <Review
                    key={item.id}
                    name={item.full_name}
                    rating={item.rating}
                    comment={item.comment}
                    image={item.img}
                  />
                ))}
            </div>
            {loggedIn && loggedIn.id !== "" ? (
              <div className="commentBox">
                <img className="imgPick" src={loggedIn.img} alt="" />
                <div className="comment">
                  <div className="stars">
                    <ClickStarRating rating={rating} setRating={setRating} />
                  </div>
                  <input
                    className="commentField"
                    type="text"
                    placeholder="Skriv en recension här..."
                    value={comment}
                    onChange={(event) => {
                      setComment(event.target.value);
                    }}
                  />
                </div>
                <SendFill
                  className="sendButton"
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
