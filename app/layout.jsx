import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

// Configure the new fonts
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  styles: ["normal", "italic"],
});

export const metadata = {
  metadataBase: new URL("https://www.1trilliondollarcto.io/"),
  title: {
    default:
      "Trillion Dollar Coin (1T) - A Trillion Dollar Coin for the People by the People.",
    template: "%s - Trillion Dollar Coin (1T)",
  },
  description:
    'Community Takeover of the 1T Coin: A Trillion Dollar Coin for the People by the People. The 1T CTO is a satirical community-driven initiative to claim ownership of the much-discussed yet often derided concept of the "Trillion Dollar Coin." Originally proposed as a means to bypass the U.S. debt ceiling, the trillion-dollar coin has been called a "dumb idea" by financial expert Peter Schiff but continues to capture the public imagination. This project embraces the idea of the coin not as a serious financial tool but as a symbol of collective action, unity, and financial reimagining.',
  keywords: "trillion dollar coin, 1T coin, community coin, satirical coin",
  openGraph: {
    title: "Trillion Dollar Coin (1T)",
    description:
      'Community Takeover of the 1T Coin: A Trillion Dollar Coin for the People by the People. The 1T CTO is a satirical community-driven initiative to claim ownership of the much-discussed yet often derided concept of the "Trillion Dollar Coin."',
    url: "https://www.1trilliondollarcto.io/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trillion Dollar Coin (1T)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trillion Dollar Coin (1T)",
    description:
      'Community Takeover of the 1T Coin: A Trillion Dollar Coin for the People by the People. The 1T CTO is a satirical community-driven initiative to claim ownership of the much-discussed yet often derided concept of the "Trillion Dollar Coin."',
    images: [
      {
        url: "/og-image.png",
        alt: "Trillion Dollar Coin (1T)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.1trilliondollarcto.io/favicon.ico" />
      </head>
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} antialiased min-h-screen bg-[#050e27]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
