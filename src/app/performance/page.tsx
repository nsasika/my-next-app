"use client";
import UserCard from "@/components/UserCard";
import React, { useState } from "react";

const PerformancePage: React.FC =()=>{
    const [count, setCount] = useState(0);
    console.log("PerformancePage rendered");
    return(
        <main>
            <h1>React Performance Practice</h1>
            <p>We will practice rerenders, memoization, API debounce, and large lists here.</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
            <UserCard name="John Doe" />
        </main>
    )

}

export default PerformancePage;