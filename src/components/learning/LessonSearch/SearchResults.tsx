'use client';

import type { AppPath } from '@/config/routes';
import Link from 'next/link';
import { memo } from 'react';

export type LessonSearchResult = {
  href: AppPath;
  label: string;
  section: string;
  technology: string;
};

const ResultItem = memo(function ResultItem({
  onSelect,
  result,
}: {
  onSelect?: () => void;
  result: LessonSearchResult;
}) {
  return (
    <Link
      className="block rounded-lg border border-slate-200 bg-white px-3 py-2 transition hover:border-sky-300 hover:bg-sky-50"
      href={result.href}
      onClick={onSelect}
    >
      <span className="block text-sm font-black text-slate-950">
        {result.label}
      </span>
      <span className="mt-1 block text-xs font-semibold text-slate-500">
        {result.technology} / {result.section}
      </span>
    </Link>
  );
});

function SearchResults({
  hasQuery,
  onSelect,
  results,
}: {
  hasQuery: boolean;
  onSelect?: () => void;
  results: readonly LessonSearchResult[];
}) {
  if (!hasQuery) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        Start typing to search lessons by technology, version, hook, state
        management topic, Java chapter, or interview topic.
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        No lessons found. Try a broader search such as React, Java, state,
        performance, or interview.
      </div>
    );
  }

  return (
    <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
      {results.map((result) => (
        <ResultItem
          key={`${result.href}-${result.section}`}
          onSelect={onSelect}
          result={result}
        />
      ))}
    </div>
  );
}

export default memo(SearchResults);
