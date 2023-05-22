import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "./HomeView";
import ArrowButton from "../components/ArrowButton";
import StarRating from "../components/StarRating";
import "../styles/RecipeView.css";
import { Clock } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import { ChatText } from "react-bootstrap-icons";

function RecipeView() {
  const { recipeName } = useParams();
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
            <Heart style={{ width: "34px", height: "32px" }} />
          </div>
          <img className="recipeImg" src={recipe.image} alt="recipe" />
          <div className="innerContainer">
            <StarRating rating={recipe.rating} />
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
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeView;
