'use client';

import BrandMark from '@/components/layout/BrandMark';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import StatusMessage from '@/components/ui/StatusMessage';
import { API_ROUTES } from '@/config/api';
import { demoAuthUser } from '@/config/demoAuth';
import { APP_PATHS } from '@/config/routes';
import { authContent } from '@/content/auth';
import AppleIcon from '@mui/icons-material/Apple';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SvgIcon from '@mui/material/SvgIcon';
import type { ComponentProps, ElementType, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type OAuthProvider = {
  backgroundColor: string;
  borderColor: string;
  color: string;
  icon: ElementType;
  id: string;
};

function GoogleLogo(props: ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M21.6 12.23c0-.78-.07-1.53-.2-2.23H12v4.22h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.23c1.89-1.74 2.98-4.31 2.98-7.52Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.51c-.9.6-2.04.95-3.39.95-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A9.99 9.99 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.41 13.89a6.01 6.01 0 0 1 0-3.78V7.52H3.07a10 10 0 0 0 0 8.96l3.34-2.59Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.99c1.47 0 2.78.5 3.82 1.5l2.87-2.87C16.95 3 14.7 2 12 2a9.99 9.99 0 0 0-8.93 5.52l3.34 2.59C7.2 7.75 9.4 5.99 12 5.99Z"
        fill="#EA4335"
      />
    </SvgIcon>
  );
}

const oauthProviders: Record<string, OAuthProvider> = {
  apple: {
    backgroundColor: '#000000',
    borderColor: '#000000',
    color: '#ffffff',
    icon: AppleIcon,
    id: 'apple',
  },
  google: {
    backgroundColor: '#ffffff',
    borderColor: '#DADCE0',
    color: '#3C4043',
    icon: GoogleLogo,
    id: 'google',
  },
  linkedin: {
    backgroundColor: '#0A66C2',
    borderColor: '#0A66C2',
    color: '#ffffff',
    icon: LinkedInIcon,
    id: 'linkedin',
  },
};

function getPostLoginPath() {
  const nextPath = new URLSearchParams(window.location.search).get('next');

  if (!nextPath || !nextPath.startsWith('/') || nextPath.startsWith('//')) {
    return APP_PATHS.currentAuthenticationFlow;
  }

  return nextPath;
}

export default function LoginClient() {
  const router = useRouter();

  const [email, setEmail] = useState<string>(demoAuthUser.email);
  const [password, setPassword] = useState<string>(demoAuthUser.password);
  const [message, setMessage] = useState('');
  const [messageTone, setMessageTone] = useState<'error' | 'success'>(
    'success',
  );
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoggingIn) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const submittedEmail = String(formData.get('email') ?? '');
    const submittedPassword = String(formData.get('password') ?? '');

    setIsLoggingIn(true);
    setMessage('');

    try {
      const res = await fetch(API_ROUTES.auth.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: submittedEmail,
          password: submittedPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessageTone('success');
        setMessage(`${data.message}. Redirecting to the learning workspace...`);
        router.refresh();
        router.replace(getPostLoginPath());

        return;
      }

      setMessageTone('error');
      setMessage(
        `${data.message}. To test failure, use any email or password different from the demo credentials.`,
      );
      setIsLoggingIn(false);
    } catch {
      setMessageTone('error');
      setMessage('Login failed. Please check your connection and try again.');
      setIsLoggingIn(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 text-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex items-center justify-between">
          <BrandMark />
          <AppButton
            aria-label={authContent.login.backLinkLabel}
            className="shrink-0 px-3"
            href={APP_PATHS.home}
            variant="secondary"
          >
            <HomeRoundedIcon fontSize="small" />
            <span className="hidden sm:inline">Public site</span>
          </AppButton>
        </header>

        <section className="mx-auto grid w-full max-w-2xl min-w-0 gap-6">
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
              <p className="mt-2">Email: {demoAuthUser.email}</p>
              <p>Password: {demoAuthUser.password}</p>
            </div>

            <form className="grid gap-4" onSubmit={login}>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                {authContent.login.emailLabel}
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  disabled={isLoggingIn}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={authContent.login.emailLabel}
                  type="email"
                  value={email}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-slate-700">
                {authContent.login.passwordLabel}
                <input
                  className="rounded-lg border border-slate-300 bg-white p-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  disabled={isLoggingIn}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={authContent.login.passwordLabel}
                  type="password"
                  value={password}
                />
              </label>

              <AppButton
                className="w-full py-3"
                disabled={isLoggingIn}
                type="submit"
              >
                {isLoggingIn ? (
                  <CircularProgress color="inherit" size={18} />
                ) : null}
                {isLoggingIn
                  ? 'Checking credentials...'
                  : authContent.login.loginButtonLabel}
              </AppButton>
            </form>

            <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              <span className="h-px bg-slate-200" />
              <span>{authContent.login.oauthDividerLabel}</span>
              <span className="h-px bg-slate-200" />
            </div>

            <div className="grid gap-3">
              {authContent.login.oauthProviders.map((provider) => {
                const brand = oauthProviders[provider.id];
                const Icon = brand.icon;

                return (
                  <Button
                    key={provider.id}
                    disabled
                    fullWidth
                    startIcon={<Icon fontSize="small" />}
                    sx={{
                      '&.Mui-disabled': {
                        backgroundColor: brand.backgroundColor,
                        borderColor: brand.borderColor,
                        color: brand.color,
                        opacity: 0.72,
                      },
                      backgroundColor: brand.backgroundColor,
                      borderColor: brand.borderColor,
                      borderRadius: '8px',
                      color: brand.color,
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      justifyContent: 'center',
                      minHeight: '44px',
                      textTransform: 'none',
                    }}
                    variant="outlined"
                  >
                    {provider.label}
                  </Button>
                );
              })}
            </div>

            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
              <span className="font-black">
                {authContent.login.oauthTodoLabel}
              </span>{' '}
              {authContent.login.oauthDescription}
            </div>

            {message ? (
              <div aria-live="polite" className="mt-4">
                <StatusMessage tone={messageTone}>{message}</StatusMessage>
              </div>
            ) : null}
          </ContentCard>
        </section>
      </div>
    </main>
  );
}
