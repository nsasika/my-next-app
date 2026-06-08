'use client';
import { Button } from '@mui/material';
import useCounter from '../../hooks/useCounter';

export default function CustomHooks() {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Custom Hooks Page</h1>
      <p>
        This page is a placeholder for demonstrating custom hooks in React.
        Counter : {count}
      </p>
      <Button variant="contained" color="primary" onClick={increment}>
        Click Me
      </Button>
      <Button variant="contained" color="secondary" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}
