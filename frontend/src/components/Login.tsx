import { useState, ChangeEvent } from "react";
import "../styles/Loggin.css";
import loginImg from "../images/login.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedInUser, setLogedInUser] = useState("");

  const loginUser = () => {
    fetch(`http://localhost:8085/login/?email=${email}&password=${password}`)
      .then((response) => response.json())
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
            placeholder="email"
            value={email}
            onChange={(event) => setEmail?.(event.target.value)}
          />
          <input
            className="Input lastInput"
            type="password"
            name="password"
            placeholder="Lösenord"
            value={password}
            onChange={(event) => setPassword?.(event.target.value)}
          />
        </div>
        <button
          className="logginSubmitButton"
          onClick={() => {
            loginUser();
          }}
        >
          Logga in
        </button>

        <p className="accountQuestion">Har du inget konto än?</p>
        <button className="registerButton">Registrera dig</button>
      </div>
    </div>
  );
}

export default Login;
