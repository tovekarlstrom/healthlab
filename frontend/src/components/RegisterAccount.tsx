import { useState, ChangeEvent } from "react";
import "../styles/Loggin.css";
import registerImg from "../images/register.png";
import googleLogo from "../images/Googlelogo.svg";
import facebookLogo from "../images/Fcebooklogo.svg";
import twitterLogo from "../images/Twitterlogo.svg";
import errorIcon from "../images/Vector.png";

export interface AccountInterface {
  full_name: string;
  email: string;
  password: string;
}

function RegisterAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedInUser, setLogedInUser] = useState("");
  const [account, setAccount] = useState<AccountInterface>({
    full_name: "",
    email: "",
    password: "",
  });

  const registerAccount = () => {
    fetch(
      `http://localhost:8085/register/?email=${email}&password=${password}`,
      {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Handle the response or update state as needed
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <img className="login-img" src={registerImg} alt="" />
      <div className="Form">
        <h1 className="loginH1">Välkommen</h1>
        <div className="InputFields">
          <input
            className="Input"
            type="text"
            name="full_name"
            placeholder="För och efternamn"
            value={account.full_name}
            onChange={handleInputChange}
            required
          />

          <input
            className="Input lastInput"
            name="email"
            type="text"
            placeholder="Email"
            value={account.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="Input lastInput"
            type="password"
            name="password"
            placeholder="Lösenord"
            value={account.password}
            onChange={handleInputChange}
            required
          />
          <input
            className="Input lastInput"
            type="password"
            name="password"
            placeholder="Bekräfta lösenord"
            value={account.password}
            onChange={handleInputChange}
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
        <button className="logginSubmitButton" onClick={registerAccount}>
          Registrera dig
        </button>
        <p className="login-alternatives">Eller logga in med</p>
        <div className="logos">
          <img className="logo" src={googleLogo} alt="googles logo" />
          <img className="logo" src={facebookLogo} alt="googles logo" />
          <img className="logo" src={twitterLogo} alt="twitters logo" />
        </div>
        <div className="alredy-account">
          <p className="accountQuestion">Har du redan ett konto?</p>
          <p className="accountQuestion login">Logga in</p>
        </div>
      </div>
    </div>
  );
}
export default RegisterAccount;
