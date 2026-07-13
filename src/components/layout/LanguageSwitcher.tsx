'use client';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { Button, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useState, type MouseEvent } from 'react';
import {
  getLocaleFromPathname,
  localizePath,
  type Locale,
} from '@/i18n/config';
import { LOCALE_OPTIONS, LOCALIZED_UI } from '@/i18n/ui';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const copy = LOCALIZED_UI[locale].language;
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const selectLanguage = (nextLocale: Locale) => {
    setAnchorElement(null);
    if (nextLocale !== locale) router.push(localizePath(nextLocale, pathname));
  };

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
            onClick={() => selectLanguage(option.locale)}
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
