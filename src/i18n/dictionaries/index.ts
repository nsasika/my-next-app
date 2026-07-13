import type { Locale } from '../config';
import type { Dictionary } from '../types';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./en').then((module) => module.en),
  si: () => import('./si').then((module) => module.si),
  ta: () => import('./ta').then((module) => module.ta),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
