import "../styles/Loggin.css";
function Loggin() {
  return (
    <div className="container">
      <form className="Form" action="">
        <input className="Input" type="text" placeholder="Användarnamn" />
        <input className="Input" type="text" placeholder="Lösenord" />
        <button className="logginSubmitButton" type="submit">
          Logga in
        </button>
      </form>
      <button className="registerButton">Registrera dig</button>
    </div>
  );
}
export default Loggin;
