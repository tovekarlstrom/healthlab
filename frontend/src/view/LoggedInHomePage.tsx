import React, { useState, useContext } from 'react';
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
import MicroCircle from "../components/MicroCircle";
import SavedRecipes from "../components/SavedRecipes";
import RecipeCarousel from "../components/RecipeCarousel";

function LoggedInHomePage() {
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const name = loggedIn?.full_name;

  const [weight, setWeight] = useState("");
  const [recommendedKcal, setRecommendedKcal] = useState(null);
  const [isUpdatingWeight, setIsUpdatingWeight] = useState(false);

  const handleWeightUpdate = async () => {
    console.log("Button clicked");
    setIsUpdatingWeight(true);

    try {
      const response = await fetch("http://localhost:8085/update-weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight }),
      });

      console.log("Fetch request made");

      if (response.ok) {
        const { recommendedKcal } = await response.json();
        setRecommendedKcal(recommendedKcal);
      } else {
        console.log("Failed to update weight");
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setIsUpdatingWeight(false);
  };

  return (
    <div className="LoggedInHomePage">
      <div className="LoggedInCard">
        <div className="LoggedInHero">
          <img src={drinks} alt="drinks" />
          <div className="circleContainer">
            <Circle weight={weight} recommendedKcal={recommendedKcal} />
          </div>
        </div>
        <div className="LoggedInContent">
          <h1 className="h1 nameMobile">Tjenixen, {name}!</h1>
          <div className="LoggedInMacros">
            <div>
              <p className="Nutrient pMed">Protein</p>
              <MicroCircle nutrientAmount={50} totalSum={128} />
              <p className="pMed">50/128 g</p>
            </div>
            <div>
              <p className="Nutrient pMed">Kolhydrater</p>
              <MicroCircle nutrientAmount={60} totalSum={170} />
              <p className="pMed">60/170 g</p>
            </div>
            <div>
              <p className="Nutrient pMed">Fett</p>
              <MicroCircle nutrientAmount={14} totalSum={57} />
              <p className="pMed">14/57 g</p>
            </div>
          </div>
          <div className="weightContainer">
            <p className="pBig">Nuvarande vikt:</p>
            <input
              type="text"
              className="weightInput"
              pattern="[0-9]{3}"
              inputMode="numeric"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              maxLength={3}
              autoComplete="off"
                />
            <img src={weightBar} alt="weight bar" />
            <div className="weightWrapper">
              <p>70 kg</p>
              <p>60 kg</p>
            </div>
            <button
              className="weightButton-over"
              type="button"
              onClick={handleWeightUpdate} // Call the weight update function when the button is clicked
              disabled={isUpdatingWeight}
            >
              Uppdatera vikt
            </button>
          </div>
        </div>
      </div>
      <div className="loggedInMeals">
        <h1 className="h1 nameDesktop">Tjenixen, {name}!</h1>
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
        {/* <SavedRecipes /> */}
        <div className="loggedInRecipe">
          <h2 className="h2 recipeHeader">Förslag på recept</h2>
          <RecipeCarousel />
        </div>
      </div>
    </div>
  );
}

export default LoggedInHomePage;
