
import React from 'react';
import ButtonRegister from "../components/ButtonRegister";

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src="/Homepage-picture.jpg" alt="" style={{ height: '300px', width: '100%', objectFit: 'cover', marginBottom: '30px' }} />
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: '700' }}>Välkommen</h1>
      <p style={{ textAlign: 'center', width: '350px', fontWeight: '500' }}>Din resa mot en bättre hälsa börjar här. Vi vill hjälpa dig på bästa sätt och behöver därför veta mer om dig. Välj det alternativ som bäst stämmer in på dig.</p>
      <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', gap: '21px' }}>
        <ButtonRegister buttonText="Ner i vikt" />
        <ButtonRegister buttonText="Behåll vikt" />
        <ButtonRegister buttonText="Upp i vikt" />
        <ButtonRegister buttonText="Ingen plan" />
      </div>
    </div>
  );
}

export default HomePage;
