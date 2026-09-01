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
  title: "Crown Carbon Brush - Premium Carbon Brush Solutions",
  description: "Manufacturer of high-quality carbon brushes for industrial applications across India",
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
