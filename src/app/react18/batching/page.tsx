"use client";

import { useState } from "react";
import {CustomBtn} from '@/components';

const AutoBatchingDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [msg, setMsg] = useState<string>("Hello World!");

  console.log("🔄 component rendered");

  const runWithoutAsync=()=> {
    // React has always batched updates inside React event handlers.
    setCount((c) => c + 1);
    setText("Sync update");
    setMsg("Updated synchronously!");
  }

  const runWithAsync=()=> {
    // React 18 batches these too (async boundary).
    setTimeout(() => {
      setCount((c) => c + 1);
      setText("Async update");
      setMsg("Updated after timeout!"); 
    }, 300);
  }

  const runReset = () => {
    setCount(0);
    setText("");
    setMsg("Hello World!");
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1>React 18: Automatic Batching</h1>

      <p><b>count:</b> {count}</p>
      <p><b>text:</b> {text}</p>
      <p><b>message:</b> {msg}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <CustomBtn title="Update (sync)" variant="outlined" onClick={runWithoutAsync}/>
        <CustomBtn title="Update (async setTimeout)" variant="outlined" onClick={runWithAsync}/>
        <CustomBtn title="Reset" variant="outlined" onClick={runReset}/>
      </div>

      <p style={{ marginTop: 16, opacity: 0.8 }}>
        Tip: Open React DevTools to observe console logs and verify logged count of renders.
        Here, in each sync & asyn function 3 state updates are called, but only 1 re-render occurs due to automatic batching in React 18.
      </p>
    </div>
  );
}
export default AutoBatchingDemo;