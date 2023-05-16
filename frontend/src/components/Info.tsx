import journalIcon from "../images/icons/journal.png"
import blenderIcon from "../images/icons/blender.png"
import calcIcon from "../images/icons/calc.png"
import "../styles/Info.css"

function Info() {
  return (
    <>
      <h2 className="h2"> Vad är Healthlab? </h2>
      <div className="Info">
        <div className="Info-container">
          <img className="Info-icon" src={journalIcon} alt="icon" />
          <div className="Info-text-container">
            <p className="pMed Info-text">
              Vi hjälper dig att skräddarsy en kostplan för just dina mål.
            </p>
            <p className="pMed Info-more">Läs mer...</p>
          </div>
        </div>
        <div className="Info-container">
          <img className="Info-icon" src={blenderIcon} alt="icon" />
          <div className="Info-text-container">
            <p className="pMed Info-text">
              Hundratals näringsrika frukost, lunch och middagsrecept.
            </p>
            <p className="pMed Info-more">Läs mer...</p>
          </div>
        </div>
        <div className="Info-container">
          <img className="Info-icon" src={calcIcon} alt="icon" />
          <div className="Info-text-container">
            <p className="pMed Info-text">
              Vi hjälper dig att skräddarsy en kostplan för just dina mål.
            </p>
            <p className="pMed Info-more">Läs mer...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
