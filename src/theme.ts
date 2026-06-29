'use client';
import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: 'Arial, Helvetica, ui-sans-serif, system-ui, sans-serif',
  monoFontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
} as const;

const palette = {
  background: '#f8fafc',
  foreground: '#0f172a',
  primary: '#0284c7',
  surface: '#ffffff',
} as const;

const theme = createTheme({
  palette: {
    background: {
      default: palette.background,
      paper: palette.surface,
    },
    primary: {
      main: palette.primary,
    },
    text: {
      primary: palette.foreground,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: typography.fontFamily,
  },
  cssVariables: true,
});

export default theme;
