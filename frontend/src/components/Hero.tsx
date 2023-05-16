import heroImage from "../images/Pannkakor.png"
import "../styles/Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-image-wrapper">
        <img className="Hero-image" src={heroImage} alt="pancake background" />
        <div className="Hero-text">
          <h1 className="h1">Vi hjälper dig till ett hälsosammare liv.</h1>
          <p className="pMed">
            Genom att använda våra guider och recept kan vi garantera dig en
            hälsosammare livsstil
          </p>
        </div>
      </div>
    </div>
  )
}
