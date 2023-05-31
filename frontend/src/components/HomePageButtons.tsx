import React from "react";

interface HomePageButtonProps {
  header: string;
  paragraph: string;
  onClick: () => void;
}

const HomePageButton: React.FC<HomePageButtonProps> = ({
  header,
  paragraph,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        width: "260px",
        height: "325px",
        borderRadius: "30px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "white",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>{header}</h2>
      <div
        style={{
          width: "140px",
          height: "2px",
          backgroundColor: "#FACA15",
          marginBottom: "10px",
        }}
      ></div>
      <p
        style={{
          marginBottom: "10px",
          width: "200px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        {paragraph}
      </p>
      <button
        style={{
          backgroundColor: "#7ACB94",
          color: "#174E2E",
          borderRadius: "35px",
          width: "140px",
          height: "48px",
          border: "none",
          fontSize: "20px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        Välj
      </button>
    </div>
  );
};

export default HomePageButton;
