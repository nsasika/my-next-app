import { describe, expect, it } from 'vitest';
import { LOCALE_COOKIE_NAME } from '@/i18n/config';
import { GET } from './route';

describe('locale API', () => {
  it('persists a supported locale and redirects to the requested page', () => {
    const response = GET(
      new Request(
        'http://localhost/api/locale?locale=si-LK&redirect=%2Fsi-LK%2Facademy',
      ),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toBe(
      'http://localhost/si-LK/academy',
    );
    expect(response.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe('si-LK');
    expect(response.headers.get('set-cookie')).toContain('HttpOnly');
  });

  it('rejects unsupported locales', () => {
    const response = GET(
      new Request('http://localhost/api/locale?locale=fr&redirect=%2F'),
    );

    expect(response.status).toBe(400);
  });

  it('rejects cross-origin redirect attempts', () => {
    const response = GET(
      new Request(
        'http://localhost/api/locale?locale=en-US&redirect=%2F%2Fevil.example',
      ),
    );

    expect(response.status).toBe(400);
  });
});
