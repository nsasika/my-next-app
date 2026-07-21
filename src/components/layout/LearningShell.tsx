'use client';

import {
  APP_PATHS,
  LESSON_NAV_ITEMS,
  SIDEBAR_NAV_GROUPS,
  SIDEBAR_TRACKS,
  type SidebarNavGroup,
  type SidebarSection,
  type SidebarTechnology,
} from '@/config/routes';
import { API_ROUTES } from '@/config/api';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaceIcon from '@mui/icons-material/Face';
import HubIcon from '@mui/icons-material/Hub';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TerminalIcon from '@mui/icons-material/Terminal';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import BrandMark from './BrandMark';
import LessonSearch from '@/components/learning/LessonSearch';
import LessonPager from '@/components/learning/LessonPager';

const technologyIcons = {
  angular: DataObjectIcon,
  foundations: HubIcon,
  interviews: QuestionAnswerIcon,
  java: TerminalIcon,
  nextjs: RocketLaunchIcon,
  react: CodeIcon,
} as const;

const isRouteActive = (pathname: string, href: string) =>
  href === APP_PATHS.home ? pathname === href : pathname.startsWith(href);

const technologyHasActiveRoute = (
  pathname: string,
  technology: SidebarTechnology,
) =>
  Boolean(technology.href && isRouteActive(pathname, technology.href)) ||
  technology.sections.some((section) =>
    section.links.some(
      (link) =>
        isRouteActive(pathname, link.href) ||
        link.children?.some((child) => isRouteActive(pathname, child.href)),
    ),
  );

const getActiveGroupLabel = (
  pathname: string,
  groups: readonly SidebarNavGroup[],
) =>
  groups.find((group) =>
    group.technologies.some((technology) =>
      technologyHasActiveRoute(pathname, technology),
    ),
  )?.label ?? 'Foundations';

function SidebarSectionList({
  expanded,
  onToggle,
  onNavigate,
  openChildHref,
  pathname,
  section,
  setOpenChildHref,
}: {
  expanded: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
  openChildHref: string | null;
  pathname: string;
  section: SidebarSection;
  setOpenChildHref: (href: string | null) => void;
}) {
  return (
    <div>
      <button
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
        onClick={onToggle}
        type="button"
      >
        {section.title}
        <ExpandMoreIcon
          className={`transition ${expanded ? 'rotate-180' : ''}`}
          fontSize="small"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="mt-2 min-h-0 space-y-1 overflow-hidden">
          {section.links.map((link) => {
            const active =
              isRouteActive(pathname, link.href) ||
              Boolean(
                link.children?.some((child) =>
                  isRouteActive(pathname, child.href),
                ),
              );
            const childExpanded =
              openChildHref === link.href ||
              Boolean(
                link.children?.some((child) =>
                  isRouteActive(pathname, child.href),
                ),
              );

            return (
              <div
                key={link.href}
                className={
                  link.children
                    ? 'rounded-lg border border-slate-200 bg-slate-50 p-1'
                    : ''
                }
              >
                {link.children ? (
                  <button
                    aria-expanded={childExpanded}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-black transition ${
                      active
                        ? 'bg-white text-sky-900 shadow-sm'
                        : 'text-slate-800 hover:bg-white hover:text-slate-950'
                    }`}
                    onClick={() =>
                      setOpenChildHref(childExpanded ? null : link.href)
                    }
                    type="button"
                  >
                    {link.label}
                    <ExpandMoreIcon
                      className={`transition ${
                        childExpanded ? 'rotate-180' : ''
                      }`}
                      fontSize="small"
                    />
                  </button>
                ) : (
                  <Link
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
                )}
                {link.children ? (
                  <div
                    className={`grid transition-all duration-300 ${
                      childExpanded
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="ml-2 mt-1 min-h-0 space-y-1 overflow-hidden border-l border-slate-300 pl-3">
                      {link.children.map((child) => {
                        const childActive = isRouteActive(pathname, child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onNavigate}
                            className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                              childActive
                                ? 'bg-slate-950 text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SidebarSectionGroup({
  activeSectionTitle,
  onNavigate,
  pathname,
  sections,
}: {
  activeSectionTitle: string;
  onNavigate?: () => void;
  pathname: string;
  sections: SidebarSection[];
}) {
  const [openSectionTitle, setOpenSectionTitle] = useState(activeSectionTitle);
  const [openChildHref, setOpenChildHref] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <SidebarSectionList
          key={section.title}
          expanded={openSectionTitle === section.title}
          onNavigate={onNavigate}
          onToggle={() =>
            setOpenSectionTitle((current) =>
              current === section.title ? '' : section.title,
            )
          }
          openChildHref={openChildHref}
          pathname={pathname}
          section={section}
          setOpenChildHref={(href) => setOpenChildHref(href)}
        />
      ))}
    </div>
  );
}

function ProfileAvatar({ selected = false }: { selected?: boolean }) {
  return (
    <span
      className={`inline-flex size-10 items-center justify-center rounded-full border-2 border-sky-200 bg-sky-100 text-sky-800 ${
        selected ? 'ring-2 ring-slate-950 ring-offset-2' : ''
      }`}
    >
      <FaceIcon fontSize="small" />
    </span>
  );
}

function HeaderProfileMenu({ onLogout }: { onLogout: () => void }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const profileActions = [
    { icon: EditIcon, label: 'Edit profile' },
    { icon: WorkspacePremiumIcon, label: 'Subscribe services' },
    { icon: DeleteOutlineIcon, label: 'Delete account' },
  ] as const;

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeWhenClickingOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeWhenClickingOutside);

    return () => {
      document.removeEventListener('pointerdown', closeWhenClickingOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-expanded={open}
        aria-label="Open user profile"
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm transition hover:border-sky-300"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <ProfileAvatar selected />
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-[min(19rem,calc(100vw-2rem))] rounded-lg border border-slate-200 bg-white p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <ProfileAvatar selected />
            <div className="min-w-0">
              <p className="truncate text-sm font-black text-slate-950">
                Nalin Padmasiri
              </p>
              <p className="truncate text-xs font-semibold text-slate-500">
                Learning account
              </p>
            </div>
          </div>

          <div className="mt-3 grid gap-1">
            {profileActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.label}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  type="button"
                >
                  <Icon fontSize="small" />
                  {action.label}
                </button>
              );
            })}
            <button
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
              onClick={onLogout}
              type="button"
            >
              <LogoutIcon fontSize="small" />
              Logout
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function LearningShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeGroupLabel = useMemo(
    () => getActiveGroupLabel(pathname, SIDEBAR_NAV_GROUPS),
    [pathname],
  );
  const [manuallyOpenGroup, setManuallyOpenGroup] = useState<{
    label: SidebarNavGroup['label'];
    pathname: string;
  } | null>(null);
  const openGroupLabel =
    manuallyOpenGroup?.pathname === pathname
      ? manuallyOpenGroup.label
      : activeGroupLabel;

  const activeTechnology = useMemo(() => {
    return (
      SIDEBAR_TRACKS.find((technology) =>
        technologyHasActiveRoute(pathname, technology),
      ) ?? SIDEBAR_TRACKS[0]
    );
  }, [pathname]);

  const activeSectionTitle = useMemo(() => {
    const found = activeTechnology.sections.find((section) =>
      section.links.some(
        (link) =>
          isRouteActive(pathname, link.href) ||
          link.children?.some((child) => isRouteActive(pathname, child.href)),
      ),
    );

    return found?.title ?? activeTechnology.label;
  }, [activeTechnology, pathname]);

  const logout = async () => {
    await fetch(API_ROUTES.auth.logout, {
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
            Learning map
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            Start with foundations, review real interviews, then move through
            technology tracks in order.
          </p>
        </div>

        <div className="mb-6 space-y-3">
          {SIDEBAR_NAV_GROUPS.map((group) => {
            const expanded = openGroupLabel === group.label;

            return (
              <div
                key={group.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-1"
              >
                <button
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-[11px] font-black uppercase tracking-[0.16em] text-slate-600 transition hover:bg-white hover:text-slate-950"
                  onClick={() =>
                    setManuallyOpenGroup({
                      label: expanded ? 'Foundations' : group.label,
                      pathname,
                    })
                  }
                  type="button"
                >
                  {group.label}
                  <ExpandMoreIcon
                    className={`transition ${expanded ? 'rotate-180' : ''}`}
                    fontSize="small"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    expanded
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 space-y-2 overflow-hidden">
                    <div className="pt-2">
                      {group.technologies.map((technology) => {
                        const Icon = technologyIcons[technology.value];
                        const active = technologyHasActiveRoute(
                          pathname,
                          technology,
                        );
                        const isPlanned = technology.status === 'planned';

                        const content = (
                          <>
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? 'bg-white/15'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              <Icon fontSize="small" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center gap-2 text-sm font-black">
                                <span className="text-sm font-bold">
                                  {technology.label}
                                </span>
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SidebarSectionGroup
          key={`${activeTechnology.value}-${pathname}`}
          activeSectionTitle={activeSectionTitle}
          onNavigate={onNavigate}
          pathname={pathname}
          sections={activeTechnology.sections}
        />
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
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 lg:gap-4">
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

            <div className="hidden md:block">
              <LessonSearch />
            </div>

            <HeaderProfileMenu key={pathname} onLogout={logout} />

            <div className="w-full md:hidden">
              <LessonSearch />
            </div>
          </div>
        </header>

        <main className="mx-auto min-w-0 max-w-6xl overflow-x-clip px-4 py-8 sm:px-5 lg:px-8">
          {children}
          <LessonPager currentPath={pathname} items={LESSON_NAV_ITEMS} />
        </main>
      </div>
    </div>
  );
}
