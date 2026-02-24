import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akaar Labs",
  description: "Akaar Labs Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
