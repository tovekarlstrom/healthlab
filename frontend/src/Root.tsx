import NavBar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function Root() {
  const location = useLocation();
  const excludeNavBarAndFooter = [
    "/login",
    "/register",
    (pathname: string) => pathname.startsWith("/recipe/"),
  ];

  const renderNavbarAndFooter = !excludeNavBarAndFooter.some((exclude) =>
    typeof exclude === "function"
      ? exclude(location.pathname)
      : exclude === location.pathname
  );

  return (
    <div>
      {renderNavbarAndFooter && <NavBar />}
      <Outlet />
      {renderNavbarAndFooter && <Footer />}
    </div>
  );
}

export default Root;
