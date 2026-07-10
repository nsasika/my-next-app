import type { User } from '@/lib/features/user/usersSlice';
import { EXTERNAL_API_ENDPOINTS } from '@/config/api';
import { jsonPlaceholderClient } from './httpClient';

export function fetchJsonPlaceholderClients(query: string) {
  return jsonPlaceholderClient.get(
    EXTERNAL_API_ENDPOINTS.jsonPlaceholder.users,
    {
      params: { q: query },
    },
  );
}

export function fetchJsonPlaceholderUsers() {
  return jsonPlaceholderClient.get<User[]>(
    EXTERNAL_API_ENDPOINTS.jsonPlaceholder.users,
  );
}
