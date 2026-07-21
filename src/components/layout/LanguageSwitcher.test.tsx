import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LanguageSwitcher from './LanguageSwitcher';

let pathname = '/en/nalin';

vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    pathname = '/en/nalin';
  });

  it('shows all supported languages and preserves a localized page', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' })).toHaveAttribute(
      'href',
      '/api/locale?locale=si&redirect=%2Fsi%2Fnalin',
    );
  });

  it('switches the home page to the selected localized route', () => {
    pathname = '/';
    render(<LanguageSwitcher initialLocale="en" />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' })).toHaveAttribute(
      'href',
      '/api/locale?locale=si&redirect=%2Fsi',
    );
  });

  it('marks the active language as selected', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇬🇧 English' })).toHaveClass(
      'Mui-selected',
    );
  });

  it('prefixes an application route with the selected locale', () => {
    pathname = '/login';
    render(<LanguageSwitcher initialLocale="en" />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 தமிழ்' })).toHaveAttribute(
      'href',
      '/api/locale?locale=ta&redirect=%2Fta%2Flogin',
    );
  });
});
