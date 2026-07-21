import type { Locale } from '@/i18n/config';
import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';
import { enProductionDiagnostics } from './en';
import { siProductionDiagnostics } from './si';
import { taProductionDiagnostics } from './ta';

export const PRODUCTION_DIAGNOSTICS_CONTENT: Record<
  Locale,
  ConceptLessonContent
> = {
  en: enProductionDiagnostics,
  si: siProductionDiagnostics,
  ta: taProductionDiagnostics,
};
