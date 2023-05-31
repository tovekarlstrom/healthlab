import React from 'react';

interface ButtonRegisterProps {
  buttonText: string;
  onClick: () => void;
}

const ButtonRegister: React.FC<ButtonRegisterProps> = ({ buttonText, onClick }) => {
  return (
    <button
      style={{
        width: '174px',
        height: '42px',
        background: '#7ACB94',
        borderRadius: '30px',
        color: '#174E2E',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonRegister;
