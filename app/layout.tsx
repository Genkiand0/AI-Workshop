import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Genki Ando",
  description: "Personal site of Genki Ando, a senior at UH Manoa studying Computer Science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
