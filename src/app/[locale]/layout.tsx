import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "@/app/[locale]/provider";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kingsley",
  description: "Portfolio",
};

export default  async function RootLayout({
  children,
    params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale:string;
  }>
}>) {
    const p =  (await params).locale;
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Providers local={p}>
        {children}
      </Providers>
      </body>
    </html>
  );
}
