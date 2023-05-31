import React from "react";
import { useNavigate } from "react-router-dom";
import HomePageButton from "../components/HomePageButtons";
import "../styles/HomePageDesktop.css";

const HomePageDesktop: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate("/loggedInHomePage");
  };

  return (
    <div className="homepage-desktop">
      <div className="styleContainer">
        <h1>Välkommen</h1>
        <p className="P">
          Din resa mot bättre hälsa börjar här. Vi vill hjälpa dig på bästa sätt
          och behöver därför veta mer om dig. Välj det alternativ som bäst
          stämmer in på dig.
        </p>

        <div
          className="bigBox"
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            overflowX: "scroll",
            margin: "60px 58px 0",
            textAlign: "center",
          }}
        >
          <div className="box1">
            <HomePageButton
              header="Ner i vikt"
              paragraph="Kalorisnåla och proteinrika recept."
              onClick={handleButtonClicked}
            />
            <HomePageButton
              header="Behåll vikt"
              paragraph="Fiberrikt, sunda fetter, proteinrikt."
              onClick={handleButtonClicked}
            />
          </div>
          <div className="box2">
            <HomePageButton
              header="Upp i vikt"
              paragraph="Näringsrika och kaloririka recept"
              onClick={handleButtonClicked}
            />
            <HomePageButton
              header="Ingen plan"
              paragraph="Näringsrika och goda recept"
              onClick={handleButtonClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDesktop;
