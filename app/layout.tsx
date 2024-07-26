import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NusaLiving",
  description: "Mewujudkan Kehidupan Lebih Baik di Nusantara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi text-primary-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
