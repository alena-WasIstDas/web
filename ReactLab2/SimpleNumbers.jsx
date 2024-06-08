import { useState, useEffect, useRef } from 'react';

function SimpleNumbers() {
  const [numbers, setNumbers] = useState('');
  const [lastNumber, setLastNumber] = useState(2);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      const nextNumber = findNextSimpleNumber(lastNumber);
      setNumbers(numbers + ', ' + nextNumber);
      setLastNumber(nextNumber);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [lastNumber]);

  function findNextSimpleNumber(n) {
    let i = n + 1;
    while (true) {
      if (isSimple(i)) {
        return i;
      }
      i++;
    }
  }

  function isSimple(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <div>
      <p>{numbers}</p>
    </div>
  );
}

export default SimpleNumbers;