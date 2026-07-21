import type { Locale } from './config';

export const LOCALE_OPTIONS = [
  { flag: '🇬🇧', label: 'English', locale: 'en' },
  { flag: '🇱🇰', label: 'සිංහල', locale: 'si' },
  { flag: '🇱🇰', label: 'தமிழ்', locale: 'ta' },
] as const;

export const LOCALIZED_UI: Record<
  Locale,
  {
    language: { changeLanguage: string; currentLanguage: string };
    nav: {
      academy: string;
      buildLab: string;
      home: string;
      login: string;
      portfolio: string;
    };
  }
> = {
  en: {
    language: { changeLanguage: 'Change language', currentLanguage: 'English' },
    nav: {
      academy: 'Academy',
      buildLab: 'Build Lab',
      home: 'Home',
      login: 'Login',
      portfolio: 'Portfolio',
    },
  },
  si: {
    language: { changeLanguage: 'භාෂාව වෙනස් කරන්න', currentLanguage: 'සිංහල' },
    nav: {
      academy: 'ඇකඩමිය',
      buildLab: 'ගොඩනැගීමේ පරීක්ෂණාගාරය',
      home: 'මුල් පිටුව',
      login: 'පිවිසෙන්න',
      portfolio: 'වෘත්තීය ගොනුව',
    },
  },
  ta: {
    language: { changeLanguage: 'மொழியை மாற்றவும்', currentLanguage: 'தமிழ்' },
    nav: {
      academy: 'அகாடமி',
      buildLab: 'உருவாக்க ஆய்வகம்',
      home: 'முகப்பு',
      login: 'உள்நுழைவு',
      portfolio: 'தொழில்முறை தொகுப்பு',
    },
  },
};
