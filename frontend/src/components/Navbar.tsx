import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100%'}}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px'}}>
      <div>
        <img src="/Logo Mobile.svg" alt="Logo" style={{ width: '140px' }} />
      </div>
      <div>
        {/* hamburgare knapp*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        >
          <line x1="3" y1="12" x2="21" y2="12" style={{ stroke: '#174E2E' }} />
          <line x1="3" y1="6" x2="21" y2="6" style={{ stroke: '#174E2E' }} />
          <line x1="3" y1="18" x2="21" y2="18" style={{ stroke: '#174E2E' }} />
        </svg>
      </div>
    </div>

      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            width: '200px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '20px',
            transition: 'transform 0.3s ease-in-out',
            transform: 'translateX(0)',
          }}
        >
          <button style={{ marginBottom: '10px' }} onClick={toggleMenu}>
            Close Menu
          </button>
          <p>Mitt konto</p>
          <p>Recept</p>
          <p>Logga ut</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
