'use client';

import { useCallback, useState } from 'react';

export default function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  return { count, decrement, increment };
}
