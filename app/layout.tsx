import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import {Agdasima} from "next/font/google";
import "./globals.css";

import AppProvider from "@/providers/AppProvider";

import NavBar from "@/components/NavBar/NavBar.component";
import BottomNav from "@/components/BottomNav/BottomNav.component";

const agdasima = Agdasima({
  weight: "400",
  subsets: ["latin", "latin-ext"]
})

export const metadata: Metadata = {
  title: "Barefeet Travels"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${agdasima.className} antialiased relative w-screen h-screen`}
      >
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar/>
            {children}
            <BottomNav/>
            <Analytics/>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
