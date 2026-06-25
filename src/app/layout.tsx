import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import { roboto, geistSans, geistMono } from '@/styles/fonts';
import StoreProvider from '@/lib/StoreProvider';
import AppLayoutClient from '@/components/AppLayoutClient';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: "Nalin's Academy",
  description: "Let's learn Next.js and React together!",
  authors: [{ name: 'Nalin Padmasiri', url: 'https://github.com/nsasika' }],
  icons: {
    icon: [{ url: '/nalinsacademy.png', type: 'image/png' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;
  const verifiedUser = token ? await verifyToken(token) : null;

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <AppLayoutClient initialIsAuthenticated={Boolean(verifiedUser)}>
                {children}
              </AppLayoutClient>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
