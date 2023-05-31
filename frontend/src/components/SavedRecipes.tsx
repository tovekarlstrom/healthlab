import { LoggedInContext } from "../LoggedInContext";
import { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import { Recipe } from "../view/HomeView";
import "../styles/SavedRecipes.css";

function SavedRecipes() {
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const [likedRecipes, setLikedRecipes] = useState<Recipe[] | null>(null);

  useEffect(() => {
    if (loggedIn?.id) {
      console.log(loggedIn.id);
      fetch(`http://localhost:8085/likedRecipes/${loggedIn.id}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setLikedRecipes(result);
        });
    }
  }, [loggedIn]);

  return (
    <div>
      {likedRecipes && (
        <div className="likedRecipeCard">
          {likedRecipes.map((item) => (
            <Link to={`/recipe/${item.name}`} key={item.id}>
              <RecipeCard item={item} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default SavedRecipes;
