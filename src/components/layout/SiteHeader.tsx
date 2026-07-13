'use client';

import { APP_PATHS } from '@/config/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  getLocaleFromPathname,
  isLocalizedPublicPath,
  localizePath,
} from '@/i18n/config';
import { LOCALIZED_UI } from '@/i18n/ui';
import BrandMark from './BrandMark';
import LanguageSwitcher from './LanguageSwitcher';

export default function SiteHeader({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const labels = LOCALIZED_UI[locale].nav;

  const navItems = useMemo(
    () => [
      { href: localizePath(locale, APP_PATHS.home), label: labels.home },
      { href: localizePath(locale, APP_PATHS.academy), label: labels.academy },
      { href: localizePath(locale, APP_PATHS.nalin), label: labels.portfolio },
      { href: APP_PATHS.buildLab, label: labels.buildLab },
      ...(isAuthenticated
        ? []
        : [{ href: APP_PATHS.login, label: labels.login }]),
    ],
    [isAuthenticated, labels, locale],
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-4 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div className="md:justify-self-start">
          <BrandMark />
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-2 md:w-auto md:justify-self-center">
          {navItems.map((item) => {
            const isActive =
              item.href === localizePath(locale, APP_PATHS.home)
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
        <div className="md:justify-self-end">
          {isLocalizedPublicPath(pathname) ? <LanguageSwitcher /> : null}
        </div>
      </nav>
    </header>
  );
}
