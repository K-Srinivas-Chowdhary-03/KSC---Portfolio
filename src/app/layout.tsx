import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Srinivasulu | Full-Stack Developer",
  description: "Personal portfolio of Kamma Srinivasulu, Java Full-Stack and React.js Web Developer.",
  keywords: ["Srinivasulu", "Portfolio", "Java", "Full-Stack", "React.js", "Developer", "Web Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-white font-sans cursor-default">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
