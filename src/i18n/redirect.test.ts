import { beforeEach, describe, expect, it, vi } from 'vitest';
import { redirect } from 'next/navigation';
import { getRequestLocale } from './server';
import { redirectToLocalizedPath } from './redirect';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(() => {
    throw new Error('NEXT_REDIRECT');
  }),
}));

vi.mock('./server', () => ({
  getRequestLocale: vi.fn(),
}));

describe('localized redirects', () => {
  beforeEach(() => {
    vi.mocked(getRequestLocale).mockResolvedValue('si-LK');
  });

  it('preserves the active locale in the canonical destination', async () => {
    await expect(redirectToLocalizedPath('/java/book')).rejects.toThrow(
      'NEXT_REDIRECT',
    );

    expect(redirect).toHaveBeenCalledWith('/si-LK/java/book');
  });
});
