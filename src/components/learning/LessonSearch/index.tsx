'use client';

import { SIDEBAR_TECHNOLOGIES } from '@/config/routes';
import SearchIcon from '@mui/icons-material/Search';
import {
  lazy,
  Suspense,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from 'react';
import type { LessonSearchResult } from './SearchResults';

const SearchResults = lazy(() => import('./SearchResults'));

const lessonIndex = SIDEBAR_TECHNOLOGIES.flatMap((technology) =>
  technology.sections.flatMap((section) =>
    section.links.flatMap((link) => {
      const parent: LessonSearchResult = {
        href: link.href,
        label: link.label,
        section: section.title,
        technology: technology.label,
      };

      return link.children
        ? [
            parent,
            ...link.children.map((child) => ({
              href: child.href,
              label: child.label,
              section: `${section.title} / ${link.label}`,
              technology: technology.label,
            })),
          ]
        : [parent];
    }),
  ),
);

const normalize = (value: string) => value.trim().toLowerCase();

export default function LessonSearch() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(searchTerm);

  const results = useMemo(() => {
    const normalizedQuery = normalize(deferredQuery);

    if (!normalizedQuery) {
      return [];
    }

    return lessonIndex
      .filter((lesson) =>
        normalize(
          `${lesson.technology} ${lesson.section} ${lesson.label}`,
        ).includes(normalizedQuery),
      )
      .slice(0, 12);
  }, [deferredQuery]);

  const updateQuery = (value: string) => {
    setQuery(value);
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  return (
    <div className="relative min-w-0 md:w-80">
      <label className="relative block">
        <span className="sr-only">Search lessons</span>
        <SearchIcon
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          fontSize="small"
        />
        <input
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
          onChange={(event) => updateQuery(event.target.value)}
          placeholder="Search lessons"
          value={query}
        />
      </label>

      {query ? (
        <div className="absolute right-0 top-12 z-40 w-[min(24rem,calc(100vw-2rem))] rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              Lesson results
            </p>
            {isPending || deferredQuery !== query ? (
              <span className="text-xs font-bold text-sky-700">
                Filtering...
              </span>
            ) : null}
          </div>
          <Suspense
            fallback={
              <div className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-600">
                Loading lesson results...
              </div>
            }
          >
            <SearchResults hasQuery={Boolean(query.trim())} results={results} />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
}
