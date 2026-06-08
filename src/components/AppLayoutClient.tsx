'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import RecruiterNav from './RecruiterNav';
import Sidebar from './Sidebar';

export default function AppLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login';
  const isRecruiterPage =
    pathname === '/' ||
    pathname === '/about' ||
    pathname.startsWith('/interview-questions');

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
