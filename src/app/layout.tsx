import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';
import StoreProvider from '@/lib/StoreProvider';

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
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
