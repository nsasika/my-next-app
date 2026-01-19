"use client";

import { useRef, useState, useEffect } from "react";

export default function UseRefTest() {
  const inputRef = useRef<HTMLInputElement>(null); // Ref for accessing the DOM element
  const renderCount = useRef(0); // Ref for storing a mutable value
  const [text, setText] = useState("");

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  };

  // Increment render count after the component renders
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">useRef Hook Example</h1>

      {/* Input field with ref */}
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
        placeholder="Type something..."
      />

      {/* Button to focus the input field */}
      <button
        onClick={focusInput}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Focus Input
      </button>

      {/* Display render count */}
      <p className="text-gray-700">
        This component has rendered <strong>{renderCount.current}</strong> times.
      </p>
    </div>
  );
}