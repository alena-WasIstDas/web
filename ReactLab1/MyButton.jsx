import React, { useState } from 'react';

const Button = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const changeBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'green' ? 'red' : 'green');
  };

  return (
    <button
      style={{ backgroundColor: backgroundColor, color: 'white' }}
      onClick={changeBackgroundColor}
    >
      Нажми меня
    </button>
  );
};

export default Button;