import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Root;
