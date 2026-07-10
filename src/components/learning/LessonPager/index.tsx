import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import type { LessonNavItem } from '@/config/routes';

type LessonPagerProps = {
  currentPath: string;
  items: readonly LessonNavItem[];
};

function getAdjacentLessons(
  currentPath: string,
  items: readonly LessonNavItem[],
) {
  const currentIndex = items.findIndex((item) => item.href === currentPath);

  if (currentIndex < 0) {
    return { next: null, previous: null };
  }

  return {
    next: items[currentIndex + 1] ?? null,
    previous: items[currentIndex - 1] ?? null,
  };
}

function PagerLink({
  direction,
  item,
}: {
  direction: 'next' | 'previous';
  item: LessonNavItem;
}) {
  const isNext = direction === 'next';

  return (
    <Link
      aria-label={`${isNext ? 'Next' : 'Previous'}: ${item.label}`}
      className={`flex min-h-20 min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-slate-950 ${
        isNext ? 'justify-between text-right' : 'justify-start'
      }`}
      href={item.href}
    >
      {!isNext ? <ArrowBackIcon fontSize="small" /> : null}
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          {isNext ? 'Next' : 'Previous'}
        </span>
        <span className="mt-1 block truncate text-sm font-black">
          {item.label}
        </span>
      </span>
      {isNext ? <ArrowForwardIcon fontSize="small" /> : null}
    </Link>
  );
}

export function getLessonPagerState(
  currentPath: string,
  items: readonly LessonNavItem[],
): {
  next: LessonNavItem | null;
  previous: LessonNavItem | null;
} {
  return getAdjacentLessons(currentPath, items);
}

export default function LessonPager({ currentPath, items }: LessonPagerProps) {
  const { next, previous } = getAdjacentLessons(currentPath, items);

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-10 grid gap-3 sm:grid-cols-2"
    >
      {previous ? (
        <PagerLink direction="previous" item={previous} />
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? <PagerLink direction="next" item={next} /> : null}
    </nav>
  );
}
