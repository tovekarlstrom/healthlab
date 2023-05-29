import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/Loggin.css";
import registerImg from "../images/register.png";
import googleLogo from "../images/Googlelogo.svg";
import facebookLogo from "../images/Fcebooklogo.svg";
import twitterLogo from "../images/Twitterlogo.svg";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import ArrowButton from "./ArrowButton";

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
  const [correctCheckedPassword, setCorrectCheckedPassword] = useState(true);
  const [correctPassword, setCorrectPassword] = useState(true);
  const [correctFullName, setCorrectFullName] = useState(true);
  const [correctEmail, setCorrectEmail] = useState(true);
  const [account, setAccount] = useState<AccountInterface>({
    full_name: "",
    email: "",
    password: "",
    img: "",
  });

  const registerAccount = (account: AccountInterface) => {
    fetch("http://localhost:8085/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setLogedInUser(result);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

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
            {!correctFullName && (
              <div className="unauthorizedMessage">
                <ExclamationCircleFill
                  style={{ color: "rgba(220, 53, 69, 1)" }}
                />
                <p
                  style={{
                    margin: "0 7px",
                  }}
                >
                  Namn är oblegatoriskt
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
            {!correctEmail && (
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
            {logedInUser === "Conflict account already exists" && (
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
            {!correctPassword && (
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
                  Måset vara minst 8 tecken
                </p>
              </div>
            )}
            <input
              className="Input InputRegister"
              type="password"
              name="password"
              placeholder="Bekräfta lösenord"
              value={checkPassword}
              onChange={(event) => setCheckPassword(event.target.value)}
              required
            />
            {!correctCheckedPassword && (
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
                console.log("hej");
                const randomeImg = imgPicker();
                const addImgToAccount = { ...account, img: randomeImg };
                registerAccount(addImgToAccount);
              } else {
                if (account.password !== checkPassword) {
                  setCorrectCheckedPassword(false);
                }
                if (account.full_name === "") {
                  setCorrectFullName(false);
                }
                if (account.email === "") {
                  setCorrectEmail(false);
                }
                if (account.password === "" || account.password.length < 8) {
                  setCorrectPassword(false);
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
