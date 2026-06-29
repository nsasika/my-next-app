'use client';

import BrandMark from '@/components/layout/BrandMark';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import StatusMessage from '@/components/ui/StatusMessage';
import { APP_PATHS } from '@/config/routes';
import { authContent, dummyAuthUser } from '@/content/auth';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { ElementType } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const oauthIcons: Record<string, ElementType> = {
  apple: AppleIcon,
  google: GoogleIcon,
  linkedin: LinkedInIcon,
};

export default function LoginClient() {
  const router = useRouter();

  const [email, setEmail] = useState<string>(dummyAuthUser.email);
  const [password, setPassword] = useState<string>(dummyAuthUser.password);
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
      router.replace(APP_PATHS.authStrategy);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex items-center justify-between">
          <BrandMark />
          <AppButton href={APP_PATHS.home} variant="secondary">
            {authContent.login.backLinkLabel}
          </AppButton>
        </header>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ContentCard className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
              {authContent.login.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              {authContent.login.title}
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {authContent.login.description}
            </p>

            <div className="my-6 rounded-lg border border-sky-100 bg-sky-50 p-4 text-sm text-slate-700">
              <p className="font-bold text-slate-950">
                {authContent.login.credentialsTitle}
              </p>
              <p className="mt-2">Email: {dummyAuthUser.email}</p>
              <p>Password: {dummyAuthUser.password}</p>
            </div>

            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                {authContent.login.emailLabel}
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={authContent.login.emailLabel}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-slate-700">
                {authContent.login.passwordLabel}
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={authContent.login.passwordLabel}
                />
              </label>

              <AppButton className="w-full py-3" onClick={login}>
                {authContent.login.loginButtonLabel}
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
              <h2 className="text-xl font-black text-slate-950">
                {authContent.login.currentStrategyTitle}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {authContent.login.currentStrategyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </ContentCard>

            <ContentCard className="p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-950">
                    {authContent.login.oauthTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {authContent.login.oauthDescription}
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                  {authContent.login.oauthTodoLabel}
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {authContent.login.oauthProviders.map((provider) => {
                  const Icon = oauthIcons[provider.id];

                  return (
                    <button
                      key={provider.id}
                      type="button"
                      disabled
                      className="flex cursor-not-allowed items-center justify-center gap-3 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500"
                    >
                      <Icon fontSize="small" />
                      {provider.label}
                    </button>
                  );
                })}
              </div>
            </ContentCard>
          </div>
        </section>
      </div>
    </main>
  );
}
