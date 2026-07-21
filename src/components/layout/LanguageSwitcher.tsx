'use client';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Button, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import {
  createLocaleSwitchPath,
  resolveLocale,
  type Locale,
} from '@/i18n/config';
import { LOCALE_OPTIONS, LOCALIZED_UI } from '@/i18n/ui';

export default function LanguageSwitcher({
  initialLocale = 'en',
}: {
  initialLocale?: Locale;
}) {
  const pathname = usePathname();
  const locale = resolveLocale(pathname, initialLocale);
  const copy = LOCALIZED_UI[locale].language;
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  return (
    <>
      <Button
        aria-controls={anchorElement ? 'language-menu' : undefined}
        aria-expanded={Boolean(anchorElement)}
        aria-haspopup="menu"
        aria-label={copy.changeLanguage}
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          setAnchorElement(event.currentTarget)
        }
        size="small"
        startIcon={<LanguageRoundedIcon fontSize="small" />}
        sx={{
          borderColor: 'grey.300',
          borderRadius: 2,
          color: 'text.primary',
          fontWeight: 800,
          textTransform: 'none',
        }}
        variant="outlined"
      >
        {copy.currentLanguage}
      </Button>
      <Menu
        anchorEl={anchorElement}
        id="language-menu"
        onClose={() => setAnchorElement(null)}
        open={Boolean(anchorElement)}
      >
        {LOCALE_OPTIONS.map((option) => (
          <MenuItem
            key={option.locale}
            // Locale switching changes an HTTP-only cookie in a Route Handler.
            // A native navigation guarantees the redirected document and all
            // Server Components are rendered from the new locale on one click.
            component="a"
            href={createLocaleSwitchPath(option.locale, pathname)}
            onClick={() => setAnchorElement(null)}
            selected={option.locale === locale}
          >
            <ListItemIcon sx={{ minWidth: 34 }}>{option.flag}</ListItemIcon>
            <span className="min-w-20 font-bold">{option.label}</span>
            {option.locale === locale ? (
              <CheckRoundedIcon color="primary" fontSize="small" />
            ) : null}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
