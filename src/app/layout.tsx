import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import StoreProvider from '@/lib/StoreProvider';
import { APP_CONFIG, PUBLIC_ASSETS } from '@/config/app';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ClientObservability from '@/components/observability/ClientObservability';
import { getRequestLocale } from '@/i18n/server';

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  authors: [APP_CONFIG.author],
  icons: {
    icon: [{ url: PUBLIC_ASSETS.logo, type: 'image/png' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale}>
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
        <ClientObservability />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
