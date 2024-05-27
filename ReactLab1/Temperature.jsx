import React from 'react';

const Temperature = ({ t }) => {
  return (
    <div>
      {t < 0 ? (
        <span style={{ color: 'blue' }}>
          {t}
        </span>
      ) : (
        <span style={{ color: 'red' }}>
          {t}
        </span>
      )}
    </div>
  );
};

export default Temperature;