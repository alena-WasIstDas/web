import { useState, useEffect } from 'react';

function Timer1() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer1 = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer1);
      }
    }, 1000);
    return () => {
      clearInterval(timer1);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Timer1;