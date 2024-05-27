import React from 'react';

const OnlyEven = ({ arr }) => {
  return (
    <ul>
      {arr.filter((num) => num % 2 === 0).map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default OnlyEven;