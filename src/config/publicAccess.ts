import { API_ROUTES } from './api';
import { PUBLIC_ASSETS } from './app';
import { APP_PATHS } from './routes.type';

// Proxy allow-list for pages and static assets that must stay public.
export const PUBLIC_ROUTE_PREFIXES = [
  APP_PATHS.home,
  APP_PATHS.academy,
  APP_PATHS.buildLab,
  APP_PATHS.engineeringBlueprint,
  APP_PATHS.interviewQuestions,
  APP_PATHS.login,
  APP_PATHS.nalin,
  API_ROUTES.auth.login,
  API_ROUTES.locale,
  API_ROUTES.observability.clientEvents,
  PUBLIC_ASSETS.logo,
  PUBLIC_ASSETS.profilePhoto,
  PUBLIC_ASSETS.resumeDirectory,
] as const;
