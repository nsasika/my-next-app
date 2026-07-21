import type { Locale } from '../config';
import { enApp } from './en';
import { siApp } from './si';
import { taApp } from './ta';
import type { AppCopy } from './types';

export const APP_COPY: Record<Locale, AppCopy> = {
  en: enApp,
  si: siApp,
  ta: taApp,
};
