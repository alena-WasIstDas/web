import { useState, useEffect } from 'react';

function Timer2() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId = null;
    if (isRunning) {
      timerId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning, count]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        ▶
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        ⏸
      </button>
    </div>
  );
}

export default Timer2;