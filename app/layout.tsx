import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

import { NotificationButton } from "@/components/global/NotificationButton";
import { NavigationBar } from "@/components/global/NavigationBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Sylvorn Labs",
  description: "",
};

const madetommy = localFont({
  src: [
    {
      path: "../public/fonts/MadTommy/MadTommy-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/MadTommy/MadTommy-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-madetommy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${madetommy.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <NavigationBar />
          {children}
          <Footer />
          <NotificationButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
