import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Recipe } from "./HomeView";
import ArrowButton from "../components/ArrowButton";
import StarRating from "../components/StarRating";
import "../styles/RecipeView.css";
import { Clock } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { ChatText } from "react-bootstrap-icons";
import { Bag } from "react-bootstrap-icons";
import Review from "../components/Review";

function RecipeView() {
  const { recipeName } = useParams();
  const [like, setLike] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
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
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);
  return (
    <div>
      {recipe !== null && (
        <div>
          <ArrowButton />
          <div
            onClick={() => {
              setLike(!like);
            }}
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
              <HeartFill style={{ width: "34px", height: "32px" }} />
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
                <p>{recipe.likes}</p>
              </span>
              <span className="iconBox">
                <ChatText className="icon" />
                <p>{recipe.comments}</p>
              </span>
            </div>

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
                image="YasminFrost.png"
              />
              <Review
                name="Jane Doe"
                rating={3.5}
                comment="Den här appen har gjort det mycket enklare att gå ner i vikt!"
                image="YasminFrost.png"
              />
              <Review
                name="Jane Doe"
                rating={3.5}
                comment="Den här appen har gjort det mycket enklare att gå ner i vikt!"
                image="YasminFrost.png"
              />
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeView;
