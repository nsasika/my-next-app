'use client';

import { APP_PATHS } from '@/config/routes';
import { usePathname } from 'next/navigation';
import React from 'react';
import LearningShell from './layout/LearningShell';
import SiteHeader from './layout/SiteHeader';

const RECRUITER_PATH_PREFIXES = [APP_PATHS.interviewQuestions] as const;

export default function AppLayoutClient({
  children,
  initialIsAuthenticated,
}: {
  children: React.ReactNode;
  initialIsAuthenticated: boolean;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname === APP_PATHS.login;

  const isRecruiterPage =
    pathname === APP_PATHS.home ||
    pathname === APP_PATHS.about ||
    RECRUITER_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isRecruiterPage) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-950">
        <SiteHeader isAuthenticated={initialIsAuthenticated} />
        <main>{children}</main>
      </div>
    );
  }

  return <LearningShell>{children}</LearningShell>;
}
