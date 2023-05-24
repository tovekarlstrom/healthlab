import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "../styles/ArrowButton.css";
function ArrowButton() {
  const navigate = useNavigate();
  return (
    <div className="ArrowContainer" onClick={() => navigate(-1)}>
      <ArrowLeft
        style={{
          height: "32px",
          width: "42px",
          color: "#174E2E",
        }}
      />
    </div>
  );
}
export default ArrowButton;
