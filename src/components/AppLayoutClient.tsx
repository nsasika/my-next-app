'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Sidebar from './Sidebar';

export default function AppLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
