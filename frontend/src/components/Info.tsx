import { JournalBookmarkFill } from "react-bootstrap-icons"

function Info() {
  return (
    <div className="Info">
      <h2> Vad är Healthlab? </h2>
      <div className="Info-container">
        <div className="Info-icon-container">
          <JournalBookmarkFill className="Info-icon" />
        </div>
        <div className="Info-text">
          <p className="pMed">
            Vi hjälper dig att skräddarsy en kostplan för just dina mål.
          </p>
          <p className="pMed Info-more">Läs mer...</p>
        </div>
      </div>
    </div>
  )
}

export default Info
