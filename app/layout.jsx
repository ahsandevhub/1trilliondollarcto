import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trillion Dollar Coin - 1T",
  description:
    "The Trillion-Dollar Coin: A Dumb Idea That Won’t Go Away. The 1T CTO is a satirical, community-driven initiative to reimagine the concept of the Trillion Dollar Coin as a symbol of collective action and financial reimagining. Senior Government Officials Actually Considered '$1 Trillion Platinum Coinc:UsersahsanDownloadsphoto_2024-12-23_21-42-36.jpg'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
