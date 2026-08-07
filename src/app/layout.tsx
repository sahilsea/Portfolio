import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Mehta — MCA Student & Developer",
  description: "Portfolio of Sahil Mehta — an MCA student in the final year building real-world projects.",
  keywords: ["Sahil Mehta", "portfolio", "MCA", "developer", "software engineer", "student"],
  authors: [{ name: "Sahil Mehta" }],

  openGraph: {
    title: "Sahil Mehta — Portfolio",
    description: "An MCA student in the final year building real-world projects.",
    siteName: "Sahil Mehta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mehta — Portfolio",
    description: "An MCA student in the final year building real-world projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
