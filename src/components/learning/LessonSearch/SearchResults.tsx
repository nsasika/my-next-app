'use client';

import Link from 'next/link';
import { memo } from 'react';
import type { LearningUiCopy } from '@/i18n/learning/ui';

export type LessonSearchResult = {
  href: string;
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
  labels,
}: {
  hasQuery: boolean;
  labels: LearningUiCopy;
  onSelect?: () => void;
  results: readonly LessonSearchResult[];
}) {
  if (!hasQuery) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        {labels.searchEmpty}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        {labels.searchNoResults}
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
