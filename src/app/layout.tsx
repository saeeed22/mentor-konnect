import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentor Konnect",
  description: "A platform to connect mentors and mentees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />   {/* Global header */}
        <main className="min-h-screen">{children}</main>
        <Footer />   {/* Global footer */}
      </body>
    </html>
  );
}
