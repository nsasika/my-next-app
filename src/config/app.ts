// Global app metadata and quality gate values shared by config files.
export const APP_CONFIG = {
  author: {
    name: 'Nalin Padmasiri',
    url: 'https://github.com/nsasika',
  },
  description: "Let's learn Next.js and React together!",
  name: "Nalin's Academy",
  qualityGateCoveragePercent: 80,
} as const;

export const PUBLIC_ASSETS = {
  logo: '/nalinsacademy.png',
  profilePhoto: '/profilepic.png',
  resumeDirectory: '/resume/',
  resumes: {
    docx: '/resume/nalin-padmasiri-resume.docx',
    pdf: '/resume/nalin-padmasiri-resume.pdf',
  },
} as const;
