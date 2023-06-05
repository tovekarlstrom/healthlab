import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Loggin.css";
import registerImg from "../images/register.png";
import googleLogo from "../images/Googlelogo.svg";
import facebookLogo from "../images/Fcebooklogo.svg";
import twitterLogo from "../images/Twitterlogo.svg";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import ArrowButton from "./ArrowButton";
import { useContext } from "react";
import { LoggedInContext } from "../LoggedInContext";

import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";

export interface AccountInterface {
  full_name: string;
  email: string;
  password: string;
  img: string;
}

function RegisterAccount() {
  const [logedInUser, setLogedInUser] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [incorrectPasswordCheck, setIncorrectPasswordCheck] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectFullName, setIncorrectFullName] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [showError, setShowError] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext) ?? {
    loggedIn: null,
    setLoggedIn: null,
  };
  const [account, setAccount] = useState<AccountInterface>({
    full_name: "",
    email: "",
    password: "",
    img: "",
  });
  const navigate = useNavigate();
  const registerAccount = (account: AccountInterface) => {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => {
        if (response.status === 409) {
          setShowError(true);
        }
        return response.text();
      })
      .then((result) => {
        console.log(result);
        const parsedResult = JSON.parse(result);
        if (setLoggedIn) {
          setLoggedIn(parsedResult);
          localStorage.setItem("loggedInUser", JSON.stringify(parsedResult));
        }
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (loggedIn && loggedIn.id !== "") {
      navigate("/homepage");
    }
  }, [loggedIn, navigate]);

  function imgPicker() {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const randomeIndex = Math.floor(Math.random() * images.length);
    const randomeImage = images[randomeIndex];
    return randomeImage;
  }

  return (
    <div className="container">
      <div className="topContent">
        <ArrowButton />
        <img className="login-img" src={registerImg} alt="" />
      </div>
      <div className="content">
        <div className="Form">
          <h1 className="loginH1">Välkommen</h1>
          <div className="InputFields">
            <input
              className="InputTop"
              type="text"
              name="full_name"
              placeholder="För och efternamn"
              value={account.full_name}
              onChange={handleInputChange}
              required
            />
            {incorrectFullName && (
              <div className="unauthorizedMessage">
                <ExclamationCircleFill
                  style={{ color: "rgba(220, 53, 69, 1)" }}
                />
                <p
                  style={{
                    margin: "0 7px",
                  }}
                >
                  Namn är obligatoriskt
                </p>
              </div>
            )}
            <input
              className="Input InputRegister"
              name="email"
              type="text"
              placeholder="Email"
              value={account.email}
              onChange={handleInputChange}
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
            {/* hfkfahsljfdlas */}
            {showError && (
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
                  E-post finns redan
                </p>
              </div>
            )}
            <input
              className="Input InputRegister"
              type="password"
              name="password"
              placeholder="Lösenord"
              value={account.password}
              onChange={handleInputChange}
              required
            />
            {incorrectPassword && (
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
                  Måste vara minst 8 tecken
                </p>
              </div>
            )}
            <input
              className="Input InputRegister"
              type="password"
              name="confirmPassword"
              placeholder="Bekräfta lösenord"
              value={checkPassword}
              onChange={(event) => setCheckPassword(event.target.value)}
              required
            />
            {incorrectPasswordCheck && (
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
            className="RegisterSubmitButton"
            onClick={() => {
              if (
                account.password === checkPassword &&
                account.password !== "" &&
                account.email !== "" &&
                account.full_name !== ""
              ) {
                if (account.password.length < 8) {
                  setIncorrectPassword(true);
                } else {
                  const randomeImg = imgPicker();
                  const addImgToAccount = { ...account, img: randomeImg };
                  registerAccount(addImgToAccount);
                }
              } else {
                if (account.password !== checkPassword) {
                  setIncorrectPasswordCheck(true);
                }
                if (account.full_name === "") {
                  setIncorrectFullName(true);
                }
                if (account.email === "") {
                  setIncorrectEmail(true);
                }
                if (account.password === "" || account.password.length < 8) {
                  setIncorrectPassword(true);
                }
              }
            }}
          >
            Registrera dig
          </button>
          <p className="register-alternatives">Eller logga in med</p>
          <div className="registerLogos">
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
          <div className="already-account">
            <p className="accountQuestion">Har du redan ett konto?</p>
            <Link
              to={`/login`}
              className="accountQuestion login-register-connect"
            >
              Logga in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterAccount;
