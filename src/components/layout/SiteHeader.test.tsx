import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SiteHeader from './SiteHeader';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('./BrandMark', () => ({
  default: () => <span>Nalin&apos;s Academy</span>,
}));

vi.mock('./LanguageSwitcher', () => ({
  default: () => <button type="button">Change language</button>,
}));

describe('SiteHeader', () => {
  it('keeps the localized login entry point visible in the public navigation', () => {
    render(<SiteHeader initialLocale="si-LK" />);

    expect(screen.getByRole('link', { name: 'පිවිසෙන්න' })).toHaveAttribute(
      'href',
      '/si-LK/login',
    );
  });
});
