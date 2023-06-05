import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Loggin.css";
import loginImg from "../images/login.png";
import googleLogo from "../images/Googlelogo.svg";
import facebookLogo from "../images/Fcebooklogo.svg";
import twitterLogo from "../images/Twitterlogo.svg";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import ArrowButton from "./ArrowButton";
import { useContext } from "react";
import { LoggedInContext } from "../LoggedInContext";
function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const loginUser = () => {
    const data = {
      email: email,
      password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 401) {
          setShowErrorMessage(true);
          setIncorrectPassword(false);
        }
        return response.text();
      })
      .then((result) => {
        const parsedResult = JSON.parse(result);
        if (setLoggedIn) {
          setLoggedIn(parsedResult);
          localStorage.setItem("loggedInUser", JSON.stringify(parsedResult));
        }
      });
  };
  useEffect(() => {
    if (loggedIn && loggedIn.id !== "") {
      navigate("/loggedInHomePage");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="container">
      <div className="topContent">
        <ArrowButton />
        <img className="login-img" src={loginImg} alt="" />
      </div>
      {loggedIn && <p>{loggedIn.id}</p>}

      <div className="content">
        <p>{loggedIn?.email}</p>
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
            {incorrectEmail && (
              <div className="unauthorizedMessage">
                <ExclamationCircleFill
                  style={{
                    color: "rgba(220, 53, 69, 1)",
                  }}
                />
                <p
                  style={{
                    margin: "0 7px",
                  }}
                >
                  Använd en giltig e-post
                </p>
              </div>
            )}
            <input
              className="Input lastInput"
              type="password"
              name="password"
              placeholder="Lösenord"
              value={password}
              onChange={(event) => setPassword?.(event.target.value)}
              required
            />
            {incorrectPassword && (
              <div className="unauthorizedMessage">
                <ExclamationCircleFill
                  style={{ color: "rgba(220, 53, 69, 1)" }}
                />
                <p
                  style={{
                    margin: "0 7px",
                  }}
                >
                  Felaktigt lösenord
                </p>
              </div>
            )}
            {showErrorMessage && (
              <div className="unauthorizedMessage">
                <ExclamationCircleFill
                  style={{ color: "rgba(220, 53, 69, 1)" }}
                />
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
              if (password !== "" && email !== "") {
                loginUser();
              } else {
                if (password === "") {
                  setShowErrorMessage(false);
                  setIncorrectPassword(true);
                  if (email !== "") {
                    setIncorrectEmail(false);
                  }
                }
                if (email === "") {
                  setIncorrectEmail(true);
                }
              }
            }}
          >
            Logga in
          </button>
          <p className="login-alternatives">Eller logga in med</p>
          <div className="logos">
            <img className="logoGoogle" src={googleLogo} alt="googles logo" />
            <img
              className="logoFacebook"
              src={facebookLogo}
              alt="googles logo"
            />
            <img
              className="logoTwitter"
              src={twitterLogo}
              alt="twitters logo"
            />
          </div>
          <div className="register-account">
            <p className="accountQuestion">Har du inget konto än?</p>
            <Link
              to={`/register`}
              className="accountQuestion login-register-connect"
            >
              Registrera dig
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
