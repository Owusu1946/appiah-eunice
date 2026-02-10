import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appiah Eunice | Voice-Over Artist",
  description: "Professional voice-over artist delivering compelling narratives for brands and projects worldwide.",
  openGraph: {
    title: "Appiah Eunice | Voice-Over Artist",
    description: "Professional voice-over artist delivering compelling narratives for brands and projects worldwide.",
    url: "https://eugene-appiah.vercel.app",
    siteName: "Appiah Eunice Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Appiah Eunice",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appiah Eunice | Voice-Over Artist",
    description: "Professional voice-over artist delivering compelling narratives for brands and projects worldwide.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
