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
    'Community Takeover of the 1T Coin: A Trillion Dollar Coin for the People by the people. The 1T CTO is a satirical community-driven initiative to claim ownership of the much-discussed yet often derided concept of the "Trillion Dollar Coin." Originally proposed as a means to bypass the U.S. debt ceiling, the trillion-dollar coin has been called a "dumb idea" by financial expert Peter Schiff but continues to capture the public imagination. This project embraces the idea of the coin not as a serious financial tool but as a symbol of collective action, unity, and financial reimagining.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/screenshot.png" />
        <meta property="og:url" content="https://www.1trilliondollarcto.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Trillion Dollar Coin" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/screenshot.png" />
        <meta name="twitter:site" content="@1TonEthCTO" />

        {/* Favicon (Optional) */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased min-h-screen bg-[#050e27]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
