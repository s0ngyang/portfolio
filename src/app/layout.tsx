import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Song Yang's Portfolio",
  description:
    "Song Yang's developer portfolio, experience and projects. He is a final year Computer Science student open to Software Engineer roles",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/background.webp" />
      </head>
      <body className={`${inter.className} justify-center flex`}>
        {children}
      </body>
    </html>
  );
}
