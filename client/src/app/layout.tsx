import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Song Yang's Portfolio",
  description: "My experience and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} justify-center items-center flex flex-col`}
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </body>
    </html>
  );
}
