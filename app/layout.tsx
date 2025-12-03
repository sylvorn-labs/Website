import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/global/NavigationBar";

export const metadata: Metadata = {
  title: "Sylvorn Labs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
