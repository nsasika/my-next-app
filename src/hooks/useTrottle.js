import { useEffect, useRef, useState } from 'react';

const useTrottle = (value, delay = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecutedRef = useRef(0);
  const timeoutRef = useRef(null);
  const trailingValueRef = useRef(value);

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastExecution = now - lastExecutedRef.current;

    trailingValueRef.current = value;

    if (timeSinceLastExecution >= delay) {
      lastExecutedRef.current = now;
      setThrottledValue(value);
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      lastExecutedRef.current = Date.now();
      setThrottledValue(trailingValueRef.current);
      timeoutRef.current = null;
    }, delay - timeSinceLastExecution);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return throttledValue;
};

export default useTrottle;
