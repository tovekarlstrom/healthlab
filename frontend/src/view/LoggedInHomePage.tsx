import "../styles/LoggedInHomePage.css";
import { PlusCircle } from "react-bootstrap-icons";
import meal1 from "../images/meal1.png";
import meal2 from "../images/meal2.png";
import meal3 from "../images/meal3.png";
import training from "../images/training.png";
function LoggedInHomePage() {
  return (
    <div className="container">
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
  );
}
export default LoggedInHomePage;
