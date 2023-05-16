import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function Root() {
  return (
    <div>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
export default Root;
