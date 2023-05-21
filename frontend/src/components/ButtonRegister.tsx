import React from 'react';

interface ButtonRegisterProps {
  buttonText: string;
}

const ButtonRegister: React.FC<ButtonRegisterProps> = ({ buttonText }) => {
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
    >
      {buttonText}
    </button>
  );
};

export default ButtonRegister;
