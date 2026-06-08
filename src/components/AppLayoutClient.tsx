'use client';

import { APP_PATHS } from '@/config/routes';
import { usePathname } from 'next/navigation';
import React from 'react';
import RecruiterNav from './RecruiterNav';
import Sidebar from './Sidebar';

const RECRUITER_PATH_PREFIXES = [APP_PATHS.interviewQuestions] as const;

export default function AppLayoutClient({
  children,
}: {
  children: React.ReactNode;
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
        <RecruiterNav />
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
