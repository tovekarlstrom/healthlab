import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
function ArrowButton() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(-1)}
      style={{
        backgroundColor: "rgba(249, 251, 249, 0.8)",
        position: "absolute",
        width: "50px",
        height: "50px",
        zIndex: "10",
        left: "20px",
        top: "20px",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
