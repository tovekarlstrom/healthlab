import heroImage from "../images/Pannkakor.png"
import "../styles/Hero.css"
import { Link } from "react-router-dom"
import TrustpilotStar from "../images/icons/trustpilot-star.png"
import Star from "../images/icons/Star.png"

export default function Hero() {
  return (
    <div className="Hero">
      <img className="Hero-image" src={heroImage} alt="pancake background" />
      <div className="Hero-content">
        <div className="Hero-text">
          <h1 className="h1">Vi hjälper dig till ett hälsosammare liv.</h1>
          <p className="pMed">
            Genom att använda våra guider och recept kan vi garantera dig en
            hälsosammare livsstil för 49kr/mån.
          </p>
        </div>

        <div className="Hero-buttons">
          <Link to={`/login`}>
            <button className="Hero-loginButton">Logga in</button>
          </Link>
          <Link to={`/homepage`}>
            <button className="Hero-registerButton">Bli en av oss!</button>
          </Link>
        </div>
        <div className="Hero-trustpilot">
          <div className="Hero-trustpilot-title">
            <img src={Star} alt="trustpilot star" />
            <p className="pBig">Trustpilot</p>
          </div>
          <div className="Hero-trustpilot-stars">
            <img src={TrustpilotStar} alt="trustpilot rating" />
            <img src={TrustpilotStar} alt="trustpilot rating" />
            <img src={TrustpilotStar} alt="trustpilot rating" />
            <img src={TrustpilotStar} alt="trustpilot rating" />
            <img src={TrustpilotStar} alt="trustpilot rating" />
          </div>
          <p className="pSmall"> Trust score 4.9 | Reviews 578</p>
        </div>
      </div>
    </div>
  )
}
