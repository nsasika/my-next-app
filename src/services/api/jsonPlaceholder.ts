import type { User } from '@/lib/features/user/usersSlice';
import { jsonPlaceholderClient } from './httpClient';

export function fetchJsonPlaceholderClients(query: string) {
  return jsonPlaceholderClient.get('/users', {
    params: { q: query },
  });
}

export function fetchJsonPlaceholderUsers() {
  return jsonPlaceholderClient.get<User[]>('/users');
}
