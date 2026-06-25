'use client';

import {
  APP_PATHS,
  RECRUITER_AUTH_NAV_ITEM,
  RECRUITER_GUEST_NAV_ITEM,
  RECRUITER_NAV_BASE_ITEMS,
} from '@/config/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import BrandMark from './BrandMark';

export default function SiteHeader({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const pathname = usePathname();

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
        <BrandMark />

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
                className={`rounded-lg px-4 py-2 text-sm font-bold transition ${
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
