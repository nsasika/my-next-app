import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_CONFIG } from './src/config/app';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: [
        'src/lib/features/**/*Slice.ts',
        'src/components/InfoCard/index.tsx',
        'src/components/ProfileLinks/index.tsx',
        'src/components/learning/ReadingList/index.tsx',
        'src/components/ResumeDownload/index.tsx',
        'src/components/StepList/index.tsx',
        'src/components/WorkExperienceTimeline/index.tsx',
        'src/i18n/config.ts',
        'src/i18n/dictionaries/index.ts',
      ],
      thresholds: {
        statements: APP_CONFIG.qualityGateCoveragePercent,
        branches: APP_CONFIG.qualityGateCoveragePercent,
        functions: APP_CONFIG.qualityGateCoveragePercent,
        lines: APP_CONFIG.qualityGateCoveragePercent,
      },
    },
  },
});
