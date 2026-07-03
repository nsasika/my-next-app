'use client';

import {
  APP_PATHS,
  SIDEBAR_TECHNOLOGIES,
  type SidebarSection,
  type SidebarTechnology,
} from '@/config/routes';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import BrandMark from './BrandMark';
import AppButton from '@/components/ui/AppButton';

const technologyIcons = {
  angular: DataObjectIcon,
  interviews: QuestionAnswerIcon,
  java: TerminalIcon,
  react: CodeIcon,
} as const;

const isRouteActive = (pathname: string, href: string) =>
  href === APP_PATHS.home ? pathname === href : pathname.startsWith(href);

const technologyHasActiveRoute = (
  pathname: string,
  technology: SidebarTechnology,
) =>
  technology.sections.some((section) =>
    section.links.some((link) => isRouteActive(pathname, link.href)),
  );

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

  const activeTechnology = useMemo(() => {
    return (
      SIDEBAR_TECHNOLOGIES.find((technology) =>
        technologyHasActiveRoute(pathname, technology),
      ) ?? SIDEBAR_TECHNOLOGIES[0]
    );
  }, [pathname]);

  const activeSectionTitle = useMemo(() => {
    const found = activeTechnology.sections.find((section) =>
      section.links.some((link) => isRouteActive(pathname, link.href)),
    );

    return found?.title ?? activeTechnology.label;
  }, [activeTechnology, pathname]);

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
    <aside className="flex h-full min-h-0 w-full flex-col border-r border-slate-200 bg-white">
      <div className="shrink-0 border-b border-slate-200 p-5">
        <div className="flex min-w-0 items-center justify-between gap-3">
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
        <div className="mb-5 rounded-lg border border-sky-100 bg-sky-50 p-3">
          <div className="flex items-center gap-2 text-sm font-bold text-sky-900">
            <AutoAwesomeIcon fontSize="small" />
            Technology tracks
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Pick a technology, then move through theory, code, and live demos.
          </p>
        </div>

        <div className="mb-6 space-y-2">
          {SIDEBAR_TECHNOLOGIES.map((technology) => {
            const Icon = technologyIcons[technology.value];
            const active = technologyHasActiveRoute(pathname, technology);
            const isPlanned = technology.status === 'planned';

            const content = (
              <>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    active ? 'bg-white/15' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Icon fontSize="small" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm font-black">
                    {technology.label}
                    {isPlanned ? (
                      <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.12em] text-slate-600">
                        Soon
                      </span>
                    ) : null}
                  </span>
                  <span
                    className={`mt-1 block text-xs leading-5 ${
                      active ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {technology.description}
                  </span>
                </span>
              </>
            );

            return technology.href ? (
              <Link
                key={technology.value}
                href={technology.href}
                onClick={onNavigate}
                className={`flex items-start gap-3 rounded-lg p-3 transition ${
                  active
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {content}
              </Link>
            ) : (
              <div
                key={technology.value}
                className="flex items-start gap-3 rounded-lg border border-dashed border-slate-200 p-3 text-slate-500"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          {activeTechnology.sections.map((section) => (
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
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950">
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:block lg:w-72">
        {renderSidebar()}
      </div>

      {mobileNavOpen ? (
        <div className="fixed inset-0 z-40 overflow-hidden bg-slate-950/30 lg:hidden">
          <div className="h-dvh w-[min(22rem,calc(100vw-2rem))] bg-white shadow-xl">
            {renderSidebar({
              onNavigate: () => setMobileNavOpen(false),
              showCloseButton: true,
            })}
          </div>
        </div>
      ) : null}

      <div className="min-w-0 lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur sm:px-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 lg:gap-4">
            <button
              aria-label="Open navigation"
              className="shrink-0 rounded-lg border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
              onClick={() => setMobileNavOpen(true)}
              type="button"
            >
              <MenuIcon fontSize="small" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
                {activeTechnology.label} / {activeSectionTitle}
              </p>
              <p className="truncate text-xs font-semibold text-slate-950 sm:text-sm">
                Theory, code example, and demo for every lesson.
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

        <main className="mx-auto min-w-0 max-w-6xl overflow-x-clip px-4 py-8 sm:px-5 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
