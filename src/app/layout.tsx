import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Drag from "@/components/ui/Drag";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header>
          <Drag />
        </header>

        <main className="flex-grow">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
