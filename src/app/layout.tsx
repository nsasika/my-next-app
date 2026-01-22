import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";
import { roboto, geistSans, geistMono } from "@/styles/fonts"; // Import fonts
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: "Nalin's Academy",
  description: "Let's learn Next.js and React together!",
  authors: [{ name: "Nalin Padmasiri", url: "https://github.com/nsasika" }],
  icons: {
    icon: [
      { url: "/nalinsacademy.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="flex min-h-screen">
              <Sidebar /> 
              <main className="flex-1 p-8 bg-gray-100">{children}</main>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}