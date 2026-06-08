'use client';

import {
  APP_PATHS,
  RECRUITER_AUTH_NAV_ITEM,
  RECRUITER_GUEST_NAV_ITEM,
  RECRUITER_NAV_BASE_ITEMS,
} from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function RecruiterNav() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch(APP_PATHS.authMe, {
        cache: 'no-store',
        credentials: 'include',
      });

      setIsAuthenticated(response.ok);
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    void Promise.resolve().then(checkAuth);

    window.addEventListener('focus', checkAuth);
    window.addEventListener('pageshow', checkAuth);

    return () => {
      window.removeEventListener('focus', checkAuth);
      window.removeEventListener('pageshow', checkAuth);
    };
  }, [checkAuth, pathname]);

  const navItems = useMemo(
    () => [
      ...RECRUITER_NAV_BASE_ITEMS,
      isAuthenticated ? RECRUITER_AUTH_NAV_ITEM : RECRUITER_GUEST_NAV_ITEM,
    ],
    [isAuthenticated],
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href={APP_PATHS.home}
          className="group inline-flex items-center gap-3"
        >
          <Image
            src="/nalinsacademy.png"
            alt="Nalin's Academy logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover"
            priority
          />
          <span className="block text-base font-bold tracking-tight text-slate-950">
            Nalin&apos;s Academy
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === APP_PATHS.home
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
