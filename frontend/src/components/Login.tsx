import { useState, ChangeEvent } from "react";
import "../styles/Loggin.css";
import loginImg from "../images/login.png";
import googleLogo from "../images/Googlelogo.svg";
import facebookLogo from "../images/Fcebooklogo.svg";
import twitterLogo from "../images/Twitterlogo.svg";
import errorIcon from "../images/Vector.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedInUser, setLogedInUser] = useState("");

  const loginUser = () => {
    fetch(`http://localhost:8085/login/?email=${email}&password=${password}`)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setLogedInUser(result);
      });
  };

  return (
    <div className="container">
      <img className="login-img" src={loginImg} alt="" />
      <div className="Form">
        <h1 className="loginH1">Välkommen</h1>
        <div className="InputFields">
          <input
            className="Input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail?.(event.target.value)}
            required
          />
          <input
            className="Input lastInput"
            type="password"
            name="password"
            placeholder="Lösenord"
            value={password}
            onChange={(event) => setPassword?.(event.target.value)}
            required
          />
          {logedInUser === "Unauthorized" && (
            <div className="unauthorizedMessage">
              <img src={errorIcon} alt="" />
              <p
                style={{
                  margin: "0 7px",
                }}
              >
                Felaktigt lösenord
              </p>
            </div>
          )}
        </div>
        <button
          className="logginSubmitButton"
          onClick={() => {
            loginUser();
          }}
        >
          Logga in
        </button>
        <p className="login-alternatives">Eller logga in med</p>
        <div className="logos">
          <img className="logo" src={googleLogo} alt="googles logo" />
          <img className="logo" src={facebookLogo} alt="googles logo" />
          <img className="logo" src={twitterLogo} alt="twitters logo" />
        </div>
        <p className="accountQuestion">Har du inget konto än?</p>
        <button className="registerButton">Registrera dig</button>
      </div>
    </div>
  );
}

export default Login;
