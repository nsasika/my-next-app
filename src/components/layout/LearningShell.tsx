'use client';

import {
  APP_PATHS,
  SIDEBAR_ROUTES,
  type SidebarSection,
} from '@/config/routes';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import BrandMark from './BrandMark';
import AppButton from '@/components/ui/AppButton';

const trackLinks = [
  {
    href: APP_PATHS.useRefTest,
    label: 'React Examples',
    icon: CodeIcon,
  },
  {
    href: APP_PATHS.javaExamples,
    label: 'Java Examples',
    icon: TerminalIcon,
  },
  {
    href: APP_PATHS.counterSlice,
    label: 'Dashboard',
    icon: DashboardIcon,
  },
] as const;

const isRouteActive = (pathname: string, href: string) =>
  href === APP_PATHS.home ? pathname === href : pathname.startsWith(href);

function SidebarSectionList({
  onNavigate,
  pathname,
  section,
}: {
  onNavigate?: () => void;
  pathname: string;
  section: SidebarSection;
}) {
  return (
    <div>
      <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
        {section.title}
      </p>
      <div className="mt-2 space-y-1">
        {section.links.map((link) => {
          const active = isRouteActive(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                active
                  ? 'bg-sky-100 text-sky-900'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function LearningShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeSectionTitle = useMemo(() => {
    const found = SIDEBAR_ROUTES.find((section) =>
      section.links.some((link) => isRouteActive(pathname, link.href)),
    );

    return found?.title ?? 'Learning Workspace';
  }, [pathname]);

  const logout = async () => {
    await fetch(APP_PATHS.authLogout, {
      method: 'POST',
    });

    router.push(APP_PATHS.login);
  };

  const renderSidebar = ({
    onNavigate,
    showCloseButton = false,
  }: {
    onNavigate?: () => void;
    showCloseButton?: boolean;
  } = {}) => (
    <aside className="flex h-full min-h-0 flex-col border-r border-slate-200 bg-white">
      <div className="shrink-0 border-b border-slate-200 p-5">
        <div className="flex items-center justify-between gap-3">
          <BrandMark />
          {showCloseButton ? (
            <button
              aria-label="Close navigation"
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              onClick={onNavigate}
              type="button"
            >
              <CloseIcon fontSize="small" />
            </button>
          ) : null}
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Learning workspace
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <div className="mb-6 rounded-lg border border-sky-100 bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sm font-bold text-sky-900">
            <AutoAwesomeIcon fontSize="small" />
            React + Java tracks
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Practical examples, interview notes, and implementation patterns.
          </p>
        </div>

        <div className="mb-6 space-y-1">
          {trackLinks.map((link) => {
            const Icon = link.icon;
            const active = isRouteActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition ${
                  active
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <Icon fontSize="small" />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="space-y-6">
          {SIDEBAR_ROUTES.map((section) => (
            <SidebarSectionList
              key={section.title}
              onNavigate={onNavigate}
              pathname={pathname}
              section={section}
            />
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-slate-200 bg-white p-4">
        <AppButton className="w-full" onClick={logout} variant="danger">
          <LogoutIcon fontSize="small" />
          Logout
        </AppButton>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-72">
        {renderSidebar()}
      </div>

      {mobileNavOpen ? (
        <div className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden">
          <div className="h-dvh w-80 max-w-[86vw] bg-white shadow-xl">
            {renderSidebar({
              onNavigate: () => setMobileNavOpen(false),
              showCloseButton: true,
            })}
          </div>
        </div>
      ) : null}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <button
              aria-label="Open navigation"
              className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
              onClick={() => setMobileNavOpen(true)}
              type="button"
            >
              <MenuIcon fontSize="small" />
            </button>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {activeSectionTitle}
              </p>
              <p className="truncate text-sm font-semibold text-slate-950">
                Build interview-ready React and Java examples.
              </p>
            </div>

            <div className="hidden min-w-64 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
              <SearchIcon fontSize="small" />
              Search examples soon
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
              NP
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-5 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
