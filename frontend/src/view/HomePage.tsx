import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonRegister from "../components/ButtonRegister";
import HomePageDesktop from "./HomePageDesktop";

const HomePage: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClicked = () => {
    navigate("/loggedInHomePage");
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: 300,
    objectFit: "cover",
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    top: "-20px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.15)",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    gap: "20px",
  };

  const paragraphStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "16px",
    marginBottom: "20px",
    fontWeight: "400",
    padding: "0px 18px 0px 18px",
  };

  if (isDesktop) {
    return <HomePageDesktop />;
  }

  return (
    <div style={containerStyle}>
      <img
        src={process.env.PUBLIC_URL + "/Homepage-picture.jpg"}
        alt=""
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h1 style={{ textAlign: "center", margin: "30px 20px" }}>Välkommen</h1>
        <p style={paragraphStyle}>
          Din resa mot en bättre hälsa börjar här. Vi vill hjälpa dig på bästa
          sätt och behöver därför veta mer om dig. Välj det alternativ som bäst
          stämmer in på dig.
        </p>
        <div style={buttonContainerStyle}>
          <ButtonRegister
            buttonText="Ner i vikt"
            onClick={handleButtonClicked}
          />
          <ButtonRegister
            buttonText="Behåll vikt"
            onClick={handleButtonClicked}
          />
          <ButtonRegister
            buttonText="Upp i vikt"
            onClick={handleButtonClicked}
          />
          <ButtonRegister
            buttonText="Ingen plan"
            onClick={handleButtonClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
