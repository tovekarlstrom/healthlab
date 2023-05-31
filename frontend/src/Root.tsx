import NavBar from "./components/Navbar";
import NavbarDesktop from "./components/NavbarDesktop";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function Root() {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 850);
  const excludeNavbar = ["/login", "/register"];
  const excludeFooter = ["/login", "/register"];
  const recipeView = location.pathname.startsWith("/recipe");

  const navbar = !excludeNavbar.includes(location.pathname);
  const footer = !excludeFooter.includes(location.pathname);

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
      {!recipeView && navbar && <NavBar />}

      <Outlet />
      {footer && <Footer />}
    </div>
  );
}

export default Root;
