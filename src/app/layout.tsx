import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Foot from "@/components/Footer";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by Next-JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    
      <main>{children}</main> {/* This will take up remaining space */}
      <Foot /> {/* The footer is now at the bottom */}
    
    </body>
    </html>
  );
}
