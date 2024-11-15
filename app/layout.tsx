import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Helakuru News Bot",
  description: "Stay informed with real-time news from Helakuru Esana delivered directly to your Discord server! 🚀 This bot automatically updates your community with the latest articles, images, and summaries—keeping everyone in the loop without leaving Discord.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
