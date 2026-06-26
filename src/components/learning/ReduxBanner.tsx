'use client';

import { hideBanner } from '@/lib/features/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const toneClasses = {
  info: 'border-sky-200 bg-sky-50 text-sky-900',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
} as const;

const REDUX_BANNER_TEXT = {
  dismissLabel: 'Dismiss banner',
  dismissText: 'Close',
} as const;

export default function ReduxBanner() {
  const dispatch = useAppDispatch();
  const banner = useAppSelector((state) => state.ui.banner);

  if (!banner) {
    return null;
  }

  return (
    <div
      role="status"
      className={`rounded-lg border px-4 py-3 ${toneClasses[banner.tone]}`}
    >
      <div className="flex gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold">{banner.title}</p>
          <p className="mt-1 text-sm leading-6">{banner.message}</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(hideBanner(banner.id))}
          className="shrink-0 rounded-md px-2 text-sm font-bold hover:bg-white/60"
          aria-label={REDUX_BANNER_TEXT.dismissLabel}
        >
          {REDUX_BANNER_TEXT.dismissText}
        </button>
      </div>
    </div>
  );
}
