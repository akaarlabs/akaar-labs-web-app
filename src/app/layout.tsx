import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akaar Labs | Building Infinite Digital Possibilities",
  description:
    "A premium digital agency helping brands achieve their goals through innovative, scalable, and modern digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
