import NavBar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function Root() {
  const location = useLocation();
  const excludeNavbar = [
    "/login",
    "/register",
    (pathname: string) => pathname.startsWith("/recipe/"),
  ];

  const excludeFooter = ["/login", "/register"];

  const renderNavbar = !excludeNavbar.some((exclude) =>
    typeof exclude === "function"
      ? exclude(location.pathname)
      : exclude === location.pathname
  );

  const renderFooter = !excludeFooter.includes(location.pathname);
  return (
    <div>
      {renderNavbar && <NavBar />}
      <Outlet />
      {renderFooter && <Footer />}
    </div>
  );
}

export default Root;
