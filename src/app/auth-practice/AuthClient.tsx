"use client";

import { useState } from "react";

type User = {
  id: string;
  email: string;
  role: string;
};

export default function AuthClient() {
  const [email, setEmail] = useState("doctor@test.com");
  const [password, setPassword] = useState("password123");
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  async function login() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      setUser(data.user);
    }
  }

  async function getProfile() {
    const res = await fetch("/api/auth/me");
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setMessage("Profile loaded from HTTP-only cookie");
    } else {
      setMessage(data.message);
      setUser(null);
    }
  }

  async function logout() {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const data = await res.json();
    setMessage(data.message);
    setUser(null);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>HTTP-only Cookie Auth Practice</h1>

      <div style={{ display: "grid", gap: 12, maxWidth: 400 }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
        <button onClick={getProfile}>Get Profile</button>
        <button onClick={logout}>Logout</button>
      </div>

      <p>{message}</p>

      {user && (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </main>
  );
}