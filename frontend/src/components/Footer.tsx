import React from "react"

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    background: "linear-gradient(96.22deg, #7ACB94 0%, #EEDF76 100%)",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontFamily: "Montserrat, sans-serif",
    // position: 'fixed', // jag placera footern
    // bottom: 0, // den justerar den längst ner på viewporten.
    width: "100%",
  }

  const divStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    fontSize: "16px",
    fontWeight: "600",
    color: "#174E2E",
    gap: "33px",
    fontFamily: "Montserrat, sans-serif",
  }

  return (
    <footer style={footerStyle}>
      <div style={divStyle}>
        <p>FAQ</p>
        <p>Om oss</p>
        <p>Kontakt</p>
      </div>
    </footer>
  )
}
export default Footer
