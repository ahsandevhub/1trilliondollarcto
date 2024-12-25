import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

// Configure the new fonts
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify weights if required
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  styles: ["normal", "italic"], // Include italic if needed
});

export const metadata = {
  title: "Trillion Dollar Coin - 1T",
  description:
    "The Trillion-Dollar Coin: A Dumb Idea That Won’t Go Away. The 1T CTO is a satirical, community-driven initiative to reimagine the concept of the Trillion Dollar Coin as a symbol of collective action and financial reimagining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-[#050e27]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
