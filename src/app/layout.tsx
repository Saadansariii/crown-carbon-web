import type React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crown Carbon Brush | High-Quality Brushes That Protect Your Armature",
  description: "25+ years of precision manufacturing. Crafted with premium carbon grades to prevent spark damage, ensure smooth operation, and protect your motor armatures across India.",
  keywords: [
    "industrial carbon brushes",
    "armature protection carbon brush",
    "rotor safe carbon brushes",
    "carbon brush manufacturer mumbai",
    "copper shunt carbon brushes",
    "slip ring carbon brushes",
    "crown carbon brush",
  ],
  openGraph: {
    title: "Crown Carbon Brush | High-Quality Brushes That Protect Your Armature",
    description: "25+ years of precision manufacturing. Crafted with premium carbon grades to prevent spark damage, ensure smooth operation, and protect your motor armatures across India.",
    siteName: "Crown Carbon Brush",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crown Carbon Brush - Protecting Your Armatures & Rotors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Carbon Brush | High-Quality Brushes That Protect Your Armature",
    description: "25+ years of precision manufacturing. Crafted with premium carbon grades to prevent spark damage, ensure smooth operation, and protect your motor armatures across India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/final_logo.svg", type: "image/svg+xml" },
      { url: "/final_logo.png", type: "image/png" },
    ],
    shortcut: "/final_logo.svg",
    apple: "/final_logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} font-sans antialiased`}>{children}</body>
    </html>
  );
}
