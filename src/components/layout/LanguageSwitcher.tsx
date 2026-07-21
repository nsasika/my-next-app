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
  initialLocale = 'en-US',
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
        slotProps={{
          list: { sx: { padding: 0.75 } },
          paper: {
            sx: {
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              boxShadow: 6,
              minWidth: 220,
            },
          },
        }}
      >
        {LOCALE_OPTIONS.map((option) => {
          const isSelectedLocale = option.locale === locale;

          return (
            <MenuItem
              key={option.locale}
              // Locale switching changes an HTTP-only cookie in a Route Handler.
              // A native navigation guarantees the redirected document and all
              // Server Components are rendered from the new locale on one click.
              aria-current={isSelectedLocale ? 'true' : undefined}
              component="a"
              data-language-state={isSelectedLocale ? 'selected' : 'muted'}
              href={createLocaleSwitchPath(option.locale, pathname)}
              onClick={() => setAnchorElement(null)}
              selected={isSelectedLocale}
              sx={{
                borderRadius: 1.5,
                color: isSelectedLocale
                  ? 'primary.contrastText'
                  : 'text.secondary',
                filter: isSelectedLocale ? 'none' : 'grayscale(1)',
                fontWeight: isSelectedLocale ? 900 : 700,
                gap: 1,
                marginY: 0.5,
                opacity: isSelectedLocale ? 1 : 0.5,
                transition:
                  'background-color 160ms ease, color 160ms ease, filter 160ms ease, opacity 160ms ease',
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  boxShadow: 2,
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'primary.dark',
                },
                '&:not(.Mui-selected):hover, &:not(.Mui-selected):focus-visible':
                  {
                    backgroundColor: 'grey.100',
                    color: 'text.primary',
                    filter: 'none',
                    opacity: 0.85,
                  },
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'inherit',
                  minWidth: 34,
                  opacity: isSelectedLocale ? 1 : 0.7,
                }}
              >
                {option.flag}
              </ListItemIcon>
              <span className="min-w-20 flex-1">{option.label}</span>
              {isSelectedLocale ? (
                <CheckRoundedIcon fontSize="small" sx={{ color: 'inherit' }} />
              ) : null}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
