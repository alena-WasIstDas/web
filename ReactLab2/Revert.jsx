import { useState, useEffect } from 'react';

function Revert({ s }) {
  const [str, setStr] = useState(s);

  useEffect(() => {
    const timerId = setInterval(() => {
      setStr(str.slice(1) + str[0]);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [str]);

  return <p>{str}</p>;
}

export default Revert;