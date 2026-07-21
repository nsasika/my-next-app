import { describe, expect, it } from 'vitest';
import { LOCALE_COOKIE_NAME } from '@/i18n/config';
import { POST } from './route';

describe('locale API', () => {
  it('persists a supported locale in an HTTP-only cookie', async () => {
    const response = await POST(
      new Request('http://localhost/api/locale', {
        body: JSON.stringify({ locale: 'si' }),
        method: 'POST',
      }),
    );

    expect(response.status).toBe(200);
    expect(response.cookies.get(LOCALE_COOKIE_NAME)?.value).toBe('si');
    expect(response.headers.get('set-cookie')).toContain('HttpOnly');
  });

  it('rejects unsupported locales', async () => {
    const response = await POST(
      new Request('http://localhost/api/locale', {
        body: JSON.stringify({ locale: 'fr' }),
        method: 'POST',
      }),
    );

    expect(response.status).toBe(400);
  });
});
