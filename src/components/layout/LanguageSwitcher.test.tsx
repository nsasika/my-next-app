import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LanguageSwitcher from './LanguageSwitcher';

const push = vi.fn();
const refresh = vi.fn();
const fetchMock = vi.fn().mockResolvedValue({ ok: true });
let pathname = '/en/nalin';

vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
  useRouter: () => ({ push, refresh }),
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    pathname = '/en/nalin';
    push.mockClear();
    refresh.mockClear();
    fetchMock.mockClear();
    vi.stubGlobal('fetch', fetchMock);
  });

  it('shows all supported languages and preserves the current page', async () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));
    fireEvent.click(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' }));

    await waitFor(() => expect(push).toHaveBeenCalledWith('/si/nalin'));
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/locale',
      expect.objectContaining({ body: JSON.stringify({ locale: 'si' }) }),
    );
  });

  it('does not navigate when the active language is selected', async () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));
    fireEvent.click(screen.getByRole('menuitem', { name: '🇬🇧 English' }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    expect(push).not.toHaveBeenCalled();
  });

  it('refreshes an unprefixed application route in the selected locale', async () => {
    pathname = '/login';
    render(<LanguageSwitcher persistedLocale="en" />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));
    fireEvent.click(screen.getByRole('menuitem', { name: '🇱🇰 தமிழ்' }));

    await waitFor(() => expect(refresh).toHaveBeenCalledOnce());
    expect(push).not.toHaveBeenCalled();
  });
});
