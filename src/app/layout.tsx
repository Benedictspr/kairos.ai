import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kairos — AI-Powered Church Presentation Software",
  description: "Kairos listens as you preach, detects Bible verses in real-time, and displays them on screen instantly. No typing, no clicking — just preach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased selection:bg-orange-500/30`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
