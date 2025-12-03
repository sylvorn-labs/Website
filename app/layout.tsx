import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

import { NotificationButton } from "@/components/global/NotificationButton";
import { NavigationBar } from "@/components/global/NavigationBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/global/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://labs.sylvorn.com"),
  title: {
    default: "Sylvorn Labs — Crafting the Future, One Line at a Time",
    template: "%s | Sylvorn Labs",
  },
  description:
    "Sylvorn Labs is the technology arm, focused on building modern software solutions, AI-driven products, and next-generation SaaS platforms. Rooted in the Sylvorn philosophy of growth, depth, and excellence, Sylvorn Labs creates purposeful digital experiences for businesses and individuals.",
  keywords: [
    "Sylvorn Labs",
    "Software Development Company",
    "SaaS Development",
    "IT Services",
    "Custom Software Solutions",
    "AI-powered Applications",
    "Product Engineering",
    "Modern Technology Company",
  ],
  authors: [{ name: "Sylvorn Labs" }],
  creator: "Sylvorn Labs",
  publisher: "Sylvorn Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labs.sylvorn.com",
    title: "Sylvorn Labs — Crafting the Future, One Line at a Time",
    description:
      "Sylvorn Labs builds modern software, intelligent applications, and scalable SaaS platforms. We combine innovation, engineering excellence, and the core Sylvorn philosophy of growth and harmony to craft the technology of tomorrow.",
    siteName: "Sylvorn Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sylvorn Labs — Crafting the Future, One Line at a Time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvorn Labs — Crafting the Future, One Line at a Time",
    description:
      "Sylvorn Labs builds modern software, intelligent applications, and scalable SaaS platforms. We combine innovation, engineering excellence, and the core Sylvorn philosophy of growth and harmony to craft the technology of tomorrow.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/icon-192x192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/logo/icon-512x512.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [
      { url: "/logo/icon-152x152.webp", sizes: "152x152", type: "image/webp" },
      { url: "/logo/icon-192x192.webp", sizes: "192x192", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://labs.sylvorn.com",
  },
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
