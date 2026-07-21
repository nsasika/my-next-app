import { NextRequest } from 'next/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { proxy } from './proxy';
import { verifyToken } from '@/server/auth/session';

vi.mock('@/server/auth/session', () => ({
  verifyToken: vi.fn(),
}));

function request(path: string, cookies: Record<string, string> = {}) {
  const cookie = Object.entries(cookies)
    .map(([name, value]) => `${name}=${value}`)
    .join('; ');

  return new NextRequest(`https://academy.test${path}`, {
    headers: cookie ? { cookie } : undefined,
  });
}

describe('locale-aware proxy routing', () => {
  beforeEach(() => {
    vi.mocked(verifyToken).mockResolvedValue(null);
  });

  it('redirects an unprefixed page to the saved locale', async () => {
    const response = await proxy(
      request('/login', { 'nalins-academy-locale': 'si-LK' }),
    );

    expect(response.headers.get('location')).toBe(
      'https://academy.test/si-LK/login',
    );
  });

  it('rewrites a canonical localized page to its route file', async () => {
    const response = await proxy(request('/ta-LK/build-lab'));

    expect(response.headers.get('x-middleware-rewrite')).toBe(
      'https://academy.test/build-lab',
    );
    expect(response.cookies.get('nalins-academy-locale')?.value).toBe('ta-LK');
  });

  it('keeps locale when redirecting a guest to login', async () => {
    const response = await proxy(request('/si-LK/foundations?tab=testing'));
    const location = new URL(response.headers.get('location')!);

    expect(location.pathname).toBe('/si-LK/login');
    expect(location.searchParams.get('next')).toBe(
      '/si-LK/foundations?tab=testing',
    );
  });

  it('allows an authenticated user to open localized login', async () => {
    vi.mocked(verifyToken).mockResolvedValue({
      email: 'learner@example.com',
      id: '1',
      role: 'ADMIN',
    });

    const response = await proxy(
      request('/si-LK/login', { access_token: 'valid-token' }),
    );

    expect(response.headers.get('location')).toBeNull();
    expect(response.headers.get('x-middleware-rewrite')).toBe(
      'https://academy.test/login',
    );
  });

  it('falls back to US English when a cookie has an unsupported value', async () => {
    const response = await proxy(
      request('/login', { 'nalins-academy-locale': 'ta' }),
    );

    expect(response.headers.get('location')).toBe(
      'https://academy.test/en-US/login',
    );
    expect(response.cookies.get('nalins-academy-locale')?.value).toBe('en-US');
  });
});
