import { API_ROUTES } from './api';
import { PUBLIC_ASSETS } from './app';
import { APP_PATHS } from './routes.type';

// Proxy allow-list for pages and static assets that must stay public.
export const PUBLIC_ROUTE_PREFIXES = [
  APP_PATHS.home,
  APP_PATHS.about,
  APP_PATHS.buildLab,
  APP_PATHS.engineeringBlueprint,
  APP_PATHS.interviewQuestions,
  APP_PATHS.login,
  API_ROUTES.auth.login,
  PUBLIC_ASSETS.logo,
  PUBLIC_ASSETS.profilePhoto,
  PUBLIC_ASSETS.resumeDirectory,
] as const;
