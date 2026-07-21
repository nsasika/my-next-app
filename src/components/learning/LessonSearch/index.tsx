'use client';

import { APP_PATHS } from '@/config/routes';
import { chapterOneTopics, chapterTwoTopics } from '@/content/java/coreJava';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  lazy,
  Suspense,
  useDeferredValue,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { searchLessons, type SearchableLesson } from './search';
import type { Locale } from '@/i18n/config';
import type { LocalizedLearningNavigation } from '@/i18n/learning/navigation';
import type { LearningUiCopy } from '@/i18n/learning/ui';

const SearchResults = lazy(() => import('./SearchResults'));

const javaTopicIndex: SearchableLesson[] = [
  ...chapterOneTopics.map((topic) => ({
    href: APP_PATHS.javaChapter1,
    label: topic.question,
    searchText: `Java Java for the Impatient Chapter 1 ${topic.question} ${topic.answer} ${topic.code}`,
    section: 'Java for the Impatient / Chapter 1',
    technology: 'Java',
  })),
  ...chapterTwoTopics.map((topic) => ({
    href: APP_PATHS.javaChapter2,
    label: topic.question,
    searchText: `Java Java for the Impatient Chapter 2 ${topic.question} ${topic.answer} ${topic.code}`,
    section: 'Java for the Impatient / Chapter 2',
    technology: 'Java',
  })),
];

function createSearchIndex(
  navigation: LocalizedLearningNavigation,
  locale: Locale,
): SearchableLesson[] {
  const trackIndex = navigation.tracks.flatMap((technology) =>
    technology.href
      ? [
          {
            href: technology.href,
            label: technology.label,
            searchText: `${technology.label} ${technology.description}`,
            section: technology.label,
            technology: technology.label,
          },
        ]
      : [],
  );

  const lessonIndex = navigation.tracks.flatMap((technology) =>
    technology.sections.flatMap((section) =>
      section.links.flatMap((link) => {
        const parent: SearchableLesson = {
          href: link.href,
          label: link.label,
          searchText: `${technology.label} ${section.title} ${link.label}`,
          section: section.title,
          technology: technology.label,
        };

        return link.children
          ? [
              parent,
              ...link.children.map((child) => ({
                href: child.href,
                label: child.label,
                searchText: `${technology.label} ${section.title} ${link.label} ${child.label}`,
                section: `${section.title} / ${link.label}`,
                technology: technology.label,
              })),
            ]
          : [parent];
      }),
    ),
  );

  // Java chapter topics are English-only source material. Excluding them from
  // Sinhala/Tamil search prevents an unexpected English result from appearing.
  return locale === 'en'
    ? [...trackIndex, ...lessonIndex, ...javaTopicIndex]
    : [...trackIndex, ...lessonIndex];
}

export default function LessonSearch({
  labels,
  locale,
  navigation,
}: {
  labels: LearningUiCopy;
  locale: Locale;
  navigation: LocalizedLearningNavigation;
}) {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(searchTerm);
  const searchableLessons = useMemo(
    () => createSearchIndex(navigation, locale),
    [locale, navigation],
  );

  const results = useMemo(() => {
    return searchLessons(searchableLessons, deferredQuery);
  }, [deferredQuery, searchableLessons]);

  const updateQuery = (value: string) => {
    setQuery(value);
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const clearSearch = () => {
    setQuery('');
    setSearchTerm('');
  };

  return (
    <div className="relative min-w-0 md:w-80">
      <label className="relative block">
        <span className="sr-only">{labels.searchPlaceholder}</span>
        <SearchIcon
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          fontSize="small"
        />
        <input
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-10 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100"
          onChange={(event) => updateQuery(event.target.value)}
          placeholder={labels.searchPlaceholder}
          value={query}
        />
        {query ? (
          <button
            aria-label={labels.searchClear}
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            onClick={clearSearch}
            type="button"
          >
            <CloseIcon fontSize="small" />
          </button>
        ) : null}
      </label>

      {query ? (
        <div className="absolute right-0 top-12 z-40 w-[min(24rem,calc(100vw-2rem))] rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              {labels.lessonResults}
            </p>
            <div className="flex items-center gap-2">
              {isPending || deferredQuery !== query ? (
                <span className="text-xs font-bold text-sky-700">
                  {labels.searchFiltering}
                </span>
              ) : null}
              <button
                aria-label={labels.searchClose}
                className="flex size-7 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                onClick={clearSearch}
                type="button"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-600">
                {labels.loadingResults}
              </div>
            }
          >
            <SearchResults
              hasQuery={Boolean(query.trim())}
              labels={labels}
              onSelect={clearSearch}
              results={results}
            />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
}
