import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";


export const metadata: Metadata = {
  title: "Lavista Clone",
  description: "Lavista Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-screen-xl mx-auto px-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
