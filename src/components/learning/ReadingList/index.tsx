'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import CodeBlock from '@/components/ui/CodeBlock';

export type ReadingListItem = {
  answer?: string;
  code?: string;
  eyebrow?: string;
  points?: readonly string[];
  question: string;
};

type ReadingListProps = {
  codeLanguage?: string;
  items: readonly ReadingListItem[];
};

export default function ReadingList({ codeLanguage, items }: ReadingListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const expanded = activeIndex === index;

        return (
          <article
            key={item.question}
            className={`overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 ${
              expanded
                ? 'border-sky-300 shadow-md'
                : 'border-slate-200 hover:border-sky-200'
            }`}
          >
            <button
              aria-expanded={expanded}
              className="flex w-full items-start gap-4 px-5 py-4 text-left"
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-black ${
                  expanded
                    ? 'bg-sky-700 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                {item.eyebrow ? (
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                    {item.eyebrow}
                  </span>
                ) : null}
                <span className="mt-1 block text-base font-black leading-6 text-slate-950">
                  {item.question}
                </span>
              </span>
              <ExpandMoreIcon
                className={`mt-1 text-slate-500 transition ${
                  expanded ? 'rotate-180' : ''
                }`}
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
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-slate-100 px-5 py-5">
                  {item.answer ? (
                    <p className="text-sm leading-6 text-slate-600">
                      {item.answer}
                    </p>
                  ) : null}
                  {item.points ? (
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {item.code ? (
                    <div className="mt-4">
                      <CodeBlock code={item.code} language={codeLanguage} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
