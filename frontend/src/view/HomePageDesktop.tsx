import React from 'react';
import HomePageButton from '../components/HomePageButtons';
import '../styles/HomePageDesktop.css';

const HomePageDesktop: React.FC = () => {
  return (
    <div className='homepage-desktop'>
      <div className='styleContainer'>
      <h1>Välkommen</h1>
      <p>
        Din resa mot bättre hälsa börjar här. Vi vill hjälpa dig på bästa sätt och behöver därför veta mer om dig.
        Välj det alternativ som bäst stämmer in på dig.
      </p>

      <div style={{marginTop: '60px', display: 'flex', gap:'170px'}}>
      <HomePageButton header="Ner i vikt" paragraph="Kalorisnåla och proteinrika recept."></HomePageButton>
      <HomePageButton header="Behåll vikt" paragraph="Fiberrikt, sunda fetter, proteinrikt."></HomePageButton>
      <HomePageButton header="Upp i vikt" paragraph="Näringsrika och kaloririka recept"></HomePageButton>
      <HomePageButton header="Ingen plan" paragraph="Näringsrika och goda recept"></HomePageButton>

      </div>
      </div>
    </div>
  );
}

export default HomePageDesktop;
