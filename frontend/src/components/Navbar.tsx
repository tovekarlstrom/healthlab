import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <img src="/Logo Mobile.svg" alt="Logo" style={{ width: "140px" }} />
        </div>
        <div>
          <HamburgerButton onClick={toggleMenu} />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: "0",
          right: isMenuOpen ? "0" : "-100%",
          bottom: "0",
          width: "50%",
          maxWidth: "200px",
          backgroundColor: "#F9FBF9",
          color: "#383838",
          padding: "20px",
          transition: "right 0.2s ease-in-out",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button style={{ marginBottom: "10px" }} onClick={toggleMenu}>
          Close Menu
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <h1 style={{ fontSize: "20px", marginBottom: "38px" }}>Registrera dig</h1>
          <h1 style={{ fontSize: "20px", marginBottom: "38px" }}>Logga in</h1>
          <h1 style={{ fontSize: "20px", marginBottom: "38px" }}>Kontakta oss</h1>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "20px" }}>
          <img src="/Logo Mobile.svg" alt="Logo" style={{ width: "136px", height: "29px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
