import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import NavbarDesktop from "./NavbarDesktop"
import HamburgerButton from "./HamburgerButton"
import "../styles/Navbar.css"
import { XLg } from "react-bootstrap-icons"
import { LoggedInContext } from "../LoggedInContext"

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 850)
  const { loggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 849)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  if (isMobileView) {
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
          <Link to="/">
            <img src="/Logo Mobile.svg" alt="Logo" style={{ width: "140px" }} />
          </Link>
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
          <XLg
            style={{ marginLeft: "130px", width: "24", height: "24px" }}
            onClick={toggleMenu}
          >
            Close Menu
          </XLg>
          <div
            className="link-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {loggedIn && loggedIn.id !== "" ? (
              <>
                <Link to="/#" className="nav-mobile" onClick={toggleMenu}>
                  Recept
                </Link>
                <Link
                  to="/loggedInHomePage"
                  onClick={toggleMenu}
                  className="nav-mobile"
                >
                  Mitt konto
                </Link>
                <Link to="/#" className="nav-mobile" onClick={handleLogout}>
                  Logga ut
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-mobile">
                  Registrera dig
                </Link>
                <Link to="/login" className="nav-mobile">
                  Logga in
                </Link>
                <Link to="/contact" className="nav-mobile">
                  Kontakta oss
                </Link>
              </>
            )}
          </div>
          <div style={{ marginTop: "auto", marginBottom: "20px" }}>
            <Link to="/#">
              <img
                src="/Logo Mobile.svg"
                alt="Logo"
                style={{ width: "136px", height: "29px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <NavbarDesktop />
}

export default Navbar
