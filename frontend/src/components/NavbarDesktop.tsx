import React from "react";
import "../styles/NavbarDesktop.css";

const NavbarDesktop: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/Logo Mobile.svg" alt="Logo" className="logo-image" />
      </div>
      <div className="options">
        <a href="/registrera" className="nav-link">
          Registrera dig
        </a>
        <a href="/#" className="nav-link">
          Logga in
        </a>
        <a href="/#" className="nav-link">
          Kontakta oss
        </a>
      </div>
    </div>
  );
};

export default NavbarDesktop;
