import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Collection",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-coffeeBlack"}>
        <header className="h-1/6 w-screen sm:h-60">
          <Image
            width={676}
            height={475}
            src="/background-shop.jpg"
            alt="Coffee shop background"
            className="w-screen h-1/6 sm:h-60"
          />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
