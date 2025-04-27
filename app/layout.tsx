import type { Metadata } from "next";
import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const Outfit = OutfitFont({
  //variable: "--font-geist-sans",
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const Ovo = OvoFont({
  //variable: "--font-geist-mono",
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Portfolio - Louis Vincelli",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //dark:bg-black dark:text-white     after overflow-x-hidden for darkmode
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Outfit.className} ${Ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
