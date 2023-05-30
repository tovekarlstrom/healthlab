import NavBar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function Root() {
  const location = useLocation();
  const excludeNavbarRecipeView = [
    (pathname: string) => pathname.startsWith("/recipe/"),
  ];

  const renderNavbar = !excludeNavbarRecipeView.some((exclude) =>
    typeof exclude === "function"
      ? exclude(location.pathname)
      : exclude === location.pathname
  );

  const excludeNavbar = ["/login", "/register"];
  const excludeFooter = ["/login", "/register"];

  const navbar = !excludeNavbar.includes(location.pathname);
  const footer = !excludeFooter.includes(location.pathname);

  const isDesktopView = window.matchMedia("(min-width: 700px)").matches;

  return (
    <div>
      {(isDesktopView || renderNavbar) && navbar && <NavBar />}
      <Outlet />
      {isDesktopView && footer && <Footer />}
    </div>
  );
}

export default Root;
