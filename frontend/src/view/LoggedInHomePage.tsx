import "../styles/LoggedInHomePage.css";
import { PlusCircle } from "react-bootstrap-icons";
import meal1 from "../images/meal1.png";
import meal2 from "../images/meal2.png";
import meal3 from "../images/meal3.png";
import training from "../images/training.png";
import Circle from "../components/Circle";
import drinks from "../images/drinks.png";
import weightBar from "../images/weightbar.png";
import { LoggedInContext } from "../LoggedInContext";
import { useContext } from "react";
import MicroCircle from "../components/MicroCircle";
import SavedRecipes from "../components/SavedRecipes";
import RecipeCarousel from "../components/RecipeCarousel";

function LoggedInHomePage() {
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const name = loggedIn?.full_name;

  return (
    <div className="LoggedInHomePage">
      <div className="LoggedInCard">
        <div className="LoggedInHero">
          <img src={drinks} alt="drinks" />
          <div className="circleContainer">
            <Circle />
          </div>
        </div>
        <div className="LoggedInContent">
          <h1 className="h1 nameMobile"> Tjenixen, {name}!</h1>
          <div className="LoggedInMacros">
            <div>
              <p className="Nutrient pMed"> Protein </p>
              <MicroCircle nutrientAmount={50} totalSum={128} />
              <p className="pMed"> 50/128 g</p>
            </div>
            <div>
              <p className="Nutrient pMed"> Kolhydrater </p>
              <MicroCircle nutrientAmount={60} totalSum={170} />
              <p className="pMed"> 60/170 g</p>
            </div>
            <div>
              <p className="Nutrient pMed"> Fett</p>
              <MicroCircle nutrientAmount={14} totalSum={57} />
              <p className="pMed"> 14/57 g</p>
            </div>
          </div>
          <div className="weightContainer">
            <p className="pBig"> Nuvarande vikt: 65 kg </p>
            <img src={weightBar} alt="weight bar" />
            <div className="weightWrapper">
              <p> 70 kg</p>
              <p> 60 kg</p>
            </div>
            <div className="weightButton">
              <p>Uppdatera vikt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="loggedInMeals">
        <h1 className="h1 nameDesktop"> Tjenixen, {name}!</h1>
        <div className="mealCards">
          <div className="mealCard">
            <div className="meal">
              <img className="mealImg" src={meal1} alt="Breakfast smoothie" />
              <p className="mealP">Frukost - 566/566 kcal</p>
            </div>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <div className="meal">
              <img className="mealImg" src={meal2} alt="Lunch sallad" />
              <p className="mealP">Lunch - 0/566 kcal</p>
            </div>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <div className="meal">
              <img className="mealImg" src={meal3} alt="Dinner steak" />
              <p className="mealP">Middag - 0/566 kcal</p>
            </div>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <div className="meal">
              <img
                className="mealImgTraining"
                src={training}
                alt="running man"
              />
              <p className="mealP">Träning - 0/30 min</p>
            </div>
            <PlusCircle className="plusCircle" />
          </div>
        </div>

        <div className="loggedInRecipe">
          <h2 className="h2 recipeHeader"> Förslag på recept </h2>
          <RecipeCarousel />
        </div>
      </div>
    </div>
  );
}
export default LoggedInHomePage;
