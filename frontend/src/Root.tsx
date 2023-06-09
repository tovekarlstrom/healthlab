import NavBar from "./components/Navbar";
import NavbarDesktop from "./components/NavbarDesktop";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function Root() {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 850);
  const excludeNavbarAndFooter = ["/login", "/register"];
  const recipeView = location.pathname.startsWith("/recipe");

  const navbarAndFooter = !excludeNavbarAndFooter.includes(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 849);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobileView && recipeView && <NavbarDesktop />}
      {!recipeView && navbarAndFooter && <NavBar />}

      <Outlet />
      {navbarAndFooter && <Footer />}
    </div>
  );
}

export default Root;
