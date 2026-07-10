// Central location for internal API paths and external service endpoints.
export const API_ROUTES = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  },
} as const;

export const EXTERNAL_API_BASE_URLS = {
  jsonPlaceholder:
    process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_BASE_URL ??
    'https://jsonplaceholder.typicode.com',
} as const;

export const EXTERNAL_API_ENDPOINTS = {
  jsonPlaceholder: {
    users: '/users',
  },
} as const;
