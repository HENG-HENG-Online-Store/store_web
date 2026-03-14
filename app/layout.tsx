import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Battambang } from "next/font/google";
import { CartProvider } from "@/lib/context/cart-context";
import { LanguageProvider } from "@/lib/context/language-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const battambang = Battambang({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ហេង ហេង - ហាងអនឡាញ",
  description: "ហាងអនឡាញ ហេង ហេង - ទិញឥវ៉ាន់អនឡាញដោយងាយស្រួល",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${battambang.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
