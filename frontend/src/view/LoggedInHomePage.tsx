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

function LoggedInHomePage() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const name = loggedIn?.full_name;

  return (
    <div className="LoggedInHomePage">
      <div className="LoggedInHero">
        <img src={drinks} alt="drinks" />
        <div className="circleContainer">
          <Circle />
        </div>
      </div>
      <div className="LoggedInContent">
        <h1 className="h1"> Tjenixen, {name}!</h1>
        <div className="LoggedInMacros">
          <div>
            <p className="Nutrient"> Protein </p>
            <MicroCircle nutrientAmount={50} totalSum={128} />
            <p> 50/128 g</p>
          </div>
          <div>
            <p className="Nutrient"> Kolhydrater </p>
            <MicroCircle nutrientAmount={60} totalSum={170} />
            <p> 60/170 g</p>
          </div>
          <div className="container">
            <p className="Nutrient"> Fett</p>
            <MicroCircle nutrientAmount={14} totalSum={57} />
            <p> 14/57 g</p>
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

        <div className="mealCards">
          <div className="mealCard">
            <img className="mealImg" src={meal1} alt="Breakfast smoothie" />
            <p className="mealP">Frukost - 566/566 kcal</p>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <img className="mealImg" src={meal2} alt="Lunch sallad" />
            <p className="mealP">Lunch - 0/566 kcal</p>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <img className="mealImg" src={meal3} alt="Dinner steak" />
            <p className="mealP">Middag - 0/566 kcal</p>
            <PlusCircle className="plusCircle" />
          </div>
          <div className="mealCard">
            <img className="mealImgTraining" src={training} alt="running man" />
            <p className="mealP">Träning - 0/30 min</p>
            <PlusCircle className="plusCircle" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoggedInHomePage;
