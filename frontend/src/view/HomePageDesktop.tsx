import React from 'react';
import HomePageButton from '../components/HomePageButtons';

const HomePageDesktop: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/desktop-image.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const lineStyle: React.CSSProperties = {
    borderLeft: '2px solid #000',
    height: '205px',
    marginRight: '20px',
    marginLeft: '20px'
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'black',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '20px',
    lineHeight: '1.4',
    width: '410px',
    fontWeight: '500'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    marginTop: '40px',
    marginLeft: '260px',
    gap: '84px'
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', marginBottom: '50px' }}>
        <div style={lineStyle} />
        <div style={contentStyle}>
          <h1 style={titleStyle}>Välkommen</h1>
          <p style={paragraphStyle}>
            Din resa mot bättre hälsa börjar här.
            Vi vill hjälpa dig på bästa sätt och behöver
            därför veta mer om dig. Välj det alternativ
            som bäst stämmer in på dig.
          </p>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <HomePageButton
          header="Ner i vikt"
          paragraph="Kalorisnåla och proteinrika recept."
        />
        <HomePageButton
          header="Behåll vikt"
          paragraph="Fiberrikt, sunda fetter, proteinrikt."
        />
        <HomePageButton
          header="Upp i vikt"
          paragraph="Näringsrika och kaloririka recept"
        />
        <HomePageButton
          header="Ingen plan"
          paragraph="Näringsrika och goda recept"
        />
      </div>
    </div>
  )
}

export default HomePageDesktop
