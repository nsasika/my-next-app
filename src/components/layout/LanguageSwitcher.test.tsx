import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LanguageSwitcher from './LanguageSwitcher';

const push = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => '/en/nalin',
  useRouter: () => ({ push }),
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => push.mockClear());

  it('shows all supported languages and preserves the current page', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));
    fireEvent.click(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' }));

    expect(push).toHaveBeenCalledWith('/si/nalin');
  });

  it('does not navigate when the active language is selected', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));
    fireEvent.click(screen.getByRole('menuitem', { name: '🇬🇧 English' }));

    expect(push).not.toHaveBeenCalled();
  });
});
