import React from "react";
import ButtonRegister from "../components/ButtonRegister";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src="/Homepage-picture.jpg"
        alt=""
        style={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "30px 30px 0px 0px",
          marginTop: "278px",
          zIndex: "2",
          width: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: "45px 18px 21px 18px",
            fontWeight: "700",
          }}
        >
          Välkommen
        </h1>
        <p style={{ textAlign: "center", width: "350px", fontWeight: "500" }}>
          Din resa mot en bättre hälsa börjar här. Vi vill hjälpa dig på bästa
          sätt och behöver därför veta mer om dig. Välj det alternativ som bäst
          stämmer in på dig.
        </p>
        <div
          style={{
            marginTop: "22px",
            display: "flex",
            flexDirection: "column",
            gap: "21px",
          }}
        >
          <ButtonRegister buttonText="Ner i vikt" />
          <ButtonRegister buttonText="Behåll vikt" />
          <ButtonRegister buttonText="Upp i vikt" />
          <ButtonRegister buttonText="Ingen plan" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
