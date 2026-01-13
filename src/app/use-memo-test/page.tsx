"use client";

import { useState, useMemo, useRef } from "react";

export default function UseMemoTest() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const bannerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Non-memoized calculation
  const nonMemoizedCalculation = () => {
    console.log("Non-memoized calculation...");
    return count * 2;
  };

  // Memoized calculation
  const memoizedCalculation = useMemo(() => {
    console.log("Memoized calculation...");
    return count * 2;
  }, [count]);

  // Function to show the banner
  const triggerBanner = () => {
    if (bannerTimeoutRef.current) {
      clearTimeout(bannerTimeoutRef.current); // Clear any existing timeout
    }
    setShowBanner(true);
    bannerTimeoutRef.current = setTimeout(() => {
      setShowBanner(false);
    }, 1000); // Hide banner after 1 second
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Banner to indicate unnecessary re-renders */}
      {showBanner && (
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-2">
          Unnecessary Render Triggered!
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">useMemo Hook Test</h1>
      <div className="mb-4">
        <p>Count: {count}</p>
        <p>Other Count: {otherCount}</p>
        <p>Non-Memoized Calculation Result: {nonMemoizedCalculation()}</p>
        <p>Memoized Calculation Result: {memoizedCalculation}</p>
      </div>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => {
            setOtherCount(otherCount + 1);
            triggerBanner(); // Trigger the banner when otherCount changes
          }}
        >
          Increment Other Count
        </button>
      </div>
    </div>
  );
}