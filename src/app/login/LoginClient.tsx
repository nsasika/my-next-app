'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function LoginClient() {
  const router = useRouter();

  const [email, setEmail] = useState('doctor@test.com');
  const [password, setPassword] = useState('password123');
  const [message, setMessage] = useState('');

  const redirectIfAlreadyLoggedIn = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me', {
        cache: 'no-store',
        credentials: 'include',
      });

      if (response.ok) {
        router.replace('/use-ref-test');
      }
    } catch {
      // Stay on login if the auth check cannot be completed.
    }
  }, [router]);

  useEffect(() => {
    void Promise.resolve().then(redirectIfAlreadyLoggedIn);

    window.addEventListener('focus', redirectIfAlreadyLoggedIn);
    window.addEventListener('pageshow', redirectIfAlreadyLoggedIn);

    return () => {
      window.removeEventListener('focus', redirectIfAlreadyLoggedIn);
      window.removeEventListener('pageshow', redirectIfAlreadyLoggedIn);
    };
  }, [redirectIfAlreadyLoggedIn]);

  async function login() {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      router.replace('/use-ref-test');
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <Link
          href="/"
          className="mb-6 inline-flex text-sm font-bold text-sky-700 hover:text-sky-900"
        >
          Back to recruiter view
        </Link>

        <h1 className="text-2xl font-bold text-slate-950">
          Login to see practical examples
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Sign in to access the older hands-on examples for hooks, Redux,
          rendering, sagas, and performance practice inside Nalin&apos;s
          Academy.
        </p>

        <div className="my-6 rounded-lg bg-sky-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-950">
            Use these test credentials:
          </p>
          <p>Email: doctor@test.com</p>
          <p>Password: password123</p>
        </div>

        <div className="grid gap-4">
          <input
            className="rounded-lg border border-slate-300 p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="rounded-lg border border-slate-300 p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            className="rounded-lg bg-slate-950 p-3 font-bold text-white transition hover:bg-slate-800"
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
