import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "PhysicsQuest — Master Olympiad Physics",
  description:
    "Learn olympiad physics chapter by chapter: 842 real problems from BdPhO 2012–2026 and USAPhO 2006–2026, filtered to the Category A, B and C syllabi, ordered easy to hard. Lessons, tips, tricks and instant solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
