import type { Locale } from './config';

export type WorkExperienceId =
  | 'creative-pagero'
  | 'dbs-technopals'
  | 'emc-percept'
  | 'gic-technopals'
  | 'hybriteq'
  | 'ideabits';

export type LocalizedWorkExperience = {
  collaboration?: string;
  countryName: string;
  dates: string;
  duration: string;
  highlights: readonly string[];
  role: string;
  summary: string;
};

export type LocalizedPanel = {
  body: string;
  items: readonly string[];
  label: string;
  title: string;
};

export type Dictionary = {
  locale: Locale;
  nav: {
    academy: string;
    buildLab: string;
    home: string;
    login: string;
    portfolio: string;
  };
  language: {
    changeLanguage: string;
    currentLanguage: string;
  };
  home: {
    hero: {
      body: string;
      eyebrow: string;
      heading: string;
      primaryAction: string;
      secondaryAction: string;
    };
    platform: {
      eyebrow: string;
      heading: string;
      steps: readonly {
        body: string;
        title: string;
      }[];
    };
    snapshot: {
      body: string;
      eyebrow: string;
      stats: readonly { label: string; value: string }[];
      title: string;
    };
  };
  academy: {
    hero: {
      body: string;
      buildLabAction: string;
      eyebrow: string;
      heading: string;
      portfolioAction: string;
    };
    learningPromise: {
      eyebrow: string;
      heading: string;
      items: readonly { body: string; title: string }[];
    };
    purpose: {
      body: string;
      eyebrow: string;
      stats: readonly { label: string; value: string }[];
      title: string;
    };
    tracks: {
      eyebrow: string;
      panels: readonly LocalizedPanel[];
      title: string;
    };
  };
  portfolio: {
    capability: {
      eyebrow: string;
      panels: readonly LocalizedPanel[];
      title: string;
    };
    enterpriseDelivery: {
      body: string;
      eyebrow: string;
      heading: string;
    };
    experience: {
      body: string;
      eyebrow: string;
      title: string;
    };
    hero: {
      action: string;
      eyebrow: string;
      heading: string;
      paragraphs: readonly string[];
    };
    resume: {
      docxLabel: string;
      downloadsLabel: string;
      pdfLabel: string;
    };
    stats: readonly { label: string; value: string }[];
    work: Record<WorkExperienceId, LocalizedWorkExperience>;
  };
};
