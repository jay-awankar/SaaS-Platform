import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { ClerkProvider } from '@clerk/nextjs'

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Educator",
  description: "Your Own AI Teacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased site-background min-h-screen bg-white/5`}>
        <ClerkProvider appearance={ {variables: { colorPrimary: '#fe5933' }}}>
          <section className="background-theme">
            <Navbar />
            {children}
          </section>
        </ClerkProvider>
      </body>
    </html>
  );
}
