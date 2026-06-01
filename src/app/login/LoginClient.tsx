"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginClient() {
  const router = useRouter();

  const [email, setEmail] = useState("doctor@test.com");
  const [password, setPassword] = useState("password123");
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
      router.push("/");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Login to Nalin&apos;s Academy
        </h1>

        <div className="mb-4 bg-blue-50 p-4 rounded">
          <p className="font-semibold">Use these test credentials:</p>
          <p>Email: doctor@test.com</p>
          <p>Password: password123</p>
        </div>

        <div className="grid gap-4">
          <input
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="border p-2 rounded"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={login}
          >
            Login
          </button>
        </div>

        {message && <p className="mt-4 text-sm">{message}</p>}
      </section>
    </main>
  );
}