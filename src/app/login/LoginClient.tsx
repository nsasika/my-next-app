'use client';

import BrandMark from '@/components/layout/BrandMark';
import AppButton from '@/components/ui/AppButton';
import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';
import StatusMessage from '@/components/ui/StatusMessage';
import { APP_PATHS } from '@/config/routes';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginClient() {
  const router = useRouter();

  const [email, setEmail] = useState('doctor@test.com');
  const [password, setPassword] = useState('password123');
  const [message, setMessage] = useState('');

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
      router.replace(APP_PATHS.useRefTest);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex items-center justify-between">
          <BrandMark />
          <AppButton href={APP_PATHS.home} variant="secondary">
            Back to public site
          </AppButton>
        </header>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ContentCard className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              Member workspace
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Login to practical React and Java examples
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Access hands-on examples for hooks, Redux, rendering, sagas, Java
              concepts, and performance practice inside Nalin&apos;s Academy.
            </p>

            <div className="my-6 rounded-lg border border-sky-100 bg-sky-50 p-4 text-sm text-slate-700">
              <p className="font-bold text-slate-950">
                Use these test credentials
              </p>
              <p className="mt-2">Email: doctor@test.com</p>
              <p>Password: password123</p>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Password
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </label>

              <AppButton className="w-full py-3" onClick={login}>
                Login
              </AppButton>
            </div>

            {message ? (
              <div className="mt-4">
                <StatusMessage tone="info">{message}</StatusMessage>
              </div>
            ) : null}
          </ContentCard>

          <div className="grid gap-4">
            <ContentCard className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                Learning tracks
              </p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                One workspace for interview-ready examples.
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: CodeIcon,
                    title: 'React',
                    body: 'Hooks, rendering, state, and performance.',
                  },
                  {
                    icon: TerminalIcon,
                    title: 'Java',
                    body: 'Core concepts, streams, APIs, and services.',
                  },
                  {
                    icon: SchoolIcon,
                    title: 'Practice',
                    body: 'Explain trade-offs clearly in interviews.',
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="mb-3 inline-flex rounded-lg bg-sky-100 p-2 text-sky-800">
                        <Icon fontSize="small" />
                      </div>
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ContentCard>

            <CodeBlock
              language="sample"
              code={`const learningPath = {
  react: ['hooks', 'redux', 'performance'],
  java: ['streams', 'spring boot', 'api design'],
};`}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
