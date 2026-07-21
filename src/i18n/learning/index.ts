import type { Locale } from '../config';
import { enLearning } from './en';
import { siLearning } from './si';
import { taLearning } from './ta';
import type { LocalizedLearningContent } from './types';

export const LEARNING_COPY: Record<Locale, LocalizedLearningContent> = {
  'en-US': enLearning,
  'si-LK': siLearning,
  'ta-LK': taLearning,
};
