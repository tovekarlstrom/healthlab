import React, { useContext } from "react"
import { Link } from "react-router-dom"
import "../styles/NavbarDesktop.css"
import { LoggedInContext } from "../LoggedInContext"

const NavbarDesktop: React.FC = () => {
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/Logo Mobile.svg" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="options">
        {loggedIn && loggedIn.id !== "" ? (
          <>
            <Link to="/" className="nav-link">
              Recept
            </Link>
            <Link to="/loggedInHomePage" className="nav-link">
              Mitt konto
            </Link>
            <Link to="/#" className="nav-link" onClick={handleLogout}>
              Logga ut
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="nav-link">
              Registrera dig
            </Link>
            <Link to="/login" className="nav-link">
              Logga in
            </Link>
            <Link to="/#" className="nav-link">
              Kontakta oss
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default NavbarDesktop
