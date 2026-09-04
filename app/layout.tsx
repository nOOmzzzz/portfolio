import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioContent } from "@/data/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultContent = portfolioContent.en;

export const metadata: Metadata = {
  title: `${defaultContent.personal.name} — ${defaultContent.personal.role}`,
  description: defaultContent.personal.tagline,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Mobile Developer",
    "Flutter",
    "Kotlin",
    "ASP.NET",
    "Domain-Driven Design",
    "Vue",
    "React",
    "TypeScript",
    "UPC",
  ],
  authors: [{ name: defaultContent.personal.fullName }],
  openGraph: {
    title: `${defaultContent.personal.name} — ${defaultContent.personal.role}`,
    description: defaultContent.personal.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#000000] text-[#ffffff] font-sans antialiased selection:bg-[#494fdf] selection:text-white">
        {children}
      </body>
    </html>
  );
}
