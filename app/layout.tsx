import type { Metadata, Viewport } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#FFF7F0",
};

export const metadata: Metadata = {
  title: "Joyeux Anniversaire Mon Amour 🎉",
  description: "Une petite surprise pleine de couleurs, de bonds et de cœurs.",
  openGraph: {
    title: "Joyeux Anniversaire Mon Amour 🎉",
    description: "Une petite surprise pleine de couleurs, de bonds et de cœurs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${fredoka.variable} ${quicksand.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
