import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LanguageSwitcher from './LanguageSwitcher';

let pathname = '/en-US/nalin';

vi.mock('next/navigation', () => ({
  usePathname: () => pathname,
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    pathname = '/en-US/nalin';
  });

  it('shows all supported languages and preserves a localized page', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' })).toHaveAttribute(
      'href',
      '/api/locale?locale=si-LK&redirect=%2Fsi-LK%2Fnalin',
    );
  });

  it('switches the home page to the selected localized route', () => {
    pathname = '/';
    render(<LanguageSwitcher initialLocale="en-US" />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 සිංහල' })).toHaveAttribute(
      'href',
      '/api/locale?locale=si-LK&redirect=%2Fsi-LK',
    );
  });

  it('marks the active language as selected', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    const selectedLanguage = screen.getByRole('menuitem', {
      name: '🇺🇸 English (US)',
    });
    const inactiveLanguage = screen.getByRole('menuitem', {
      name: '🇱🇰 සිංහල',
    });

    expect(selectedLanguage).toHaveClass('Mui-selected');
    expect(selectedLanguage).toHaveAttribute('aria-current', 'true');
    expect(selectedLanguage).toHaveAttribute('data-language-state', 'selected');
    expect(inactiveLanguage).toHaveAttribute('data-language-state', 'muted');
    expect(inactiveLanguage).not.toHaveAttribute('aria-current');
  });

  it('prefixes an application route with the selected locale', () => {
    pathname = '/login';
    render(<LanguageSwitcher initialLocale="en-US" />);

    fireEvent.click(screen.getByRole('button', { name: 'Change language' }));

    expect(screen.getByRole('menuitem', { name: '🇱🇰 தமிழ்' })).toHaveAttribute(
      'href',
      '/api/locale?locale=ta-LK&redirect=%2Fta-LK%2Flogin',
    );
  });
});
