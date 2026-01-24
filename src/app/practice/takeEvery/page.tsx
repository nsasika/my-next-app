'use client';
import { userLogEvent } from "@/lib/features/user/usersSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

const TakeEveryPage = () => {
  const dispatch = useAppDispatch();

  // Dispatch an event when the page loads
  useEffect(() => {
    dispatch(userLogEvent({ type: userLogEvent.type, at: Date.now() }));
  }, [dispatch]);

  // Handle button click to dispatch a user log event
  const handleButtonClick = () => {
    dispatch(userLogEvent({ type: userLogEvent.type, at: Date.now() }));
  };

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <h1>TakeEvery Example Page</h1>
      <p>This page demonstrates the use of Redux Saga's <strong>takeEvery</strong> effect.</p>
      <button
        onClick={handleButtonClick}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Log Event
      </button>
    </div>
  );
};

export default TakeEveryPage;