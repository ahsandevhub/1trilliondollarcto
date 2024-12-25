"use client";

import Logo from "@/public/1t coin logo new.png";
import {
  faEthereum,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax position
  useEffect(() => {
    const calculateParallax = () => {
      const x = (mousePosition.x / window.innerWidth) * 20 - 10; // Adjust intensity
      const y = (mousePosition.y / window.innerHeight) * 20 - 10;
      setImagePosition({ x, y });
    };
    calculateParallax();
  }, [mousePosition]);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/rb_30668.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="left text-white space-y-6">
              <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent">
                <div>Trillion</div>
                Dollar Coin
              </h1>
              <p className="text-xl md:text-3xl text-gray-300">
                LP BURN AND 0 TAX! <br /> CA:
              </p>
              <div className="icons flex space-x-6">
                <a
                  href="https://x.com/1T_ERC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://t.me/TrillionDollarCoin_ETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?t=1735138501569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faChartBar} />
                </a>
                <a
                  href="https://dexscreener.com/ethereum/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faEthereum} />
                </a>
              </div>
              <a
                href="#"
                className="inline-block md:text-xl font-semibold tracking-wide px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg shadow-md transition-all"
              >
                B u y &nbsp; $ 1 T
              </a>
            </div>

            {/* Right Content */}
            <div
              className="right flex justify-center"
              style={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <Image
                src={Logo}
                alt="1 trillion dollar coin"
                className="h-[300px] md:h-[600px] w-auto drop-shadow-silver-glow"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="min-h-screen flex items-center bg-gradient-to-r from-gray-950 via-gray-800 to-black text-white">
        <div className="container max-w-screen-xl mx-auto px-6 py-16 mt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section: Embedded DEXTools Link */}
            <div className="flex justify-center">
              <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
                className="h-full w-full rounded-md border"
              ></iframe>
            </div>

            {/* Right Section: About Details */}
            <div className="text-lg md:text-xl text-gray-300 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent mb-8">
                About Trillion Dollar Coin
              </h2>
              <p>
                Community Takeover of the 1T Coin: A Trillion Dollar Coin for
                the People by the people The 1T CTO is a satirical
                community-driven initiative to claim ownership of the
                much-discussed yet often derided concept of the "Trillion Dollar
                Coin." Originally proposed as a means to bypass the U.S. debt
                ceiling, the trillion-dollar coin has been called a "dumb idea"
                by financial expert Peter Schiff but continues to capture the
                public imagination. This project embraces the idea of the coin
                not as a serious financial tool but as a symbol of collective
                action, unity, and financial reimagining.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://t.me/TrillionDollarCoin_ETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                  href="https://x.com/1T_ERC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?t=1735138501569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faChartBar} />
                </a>
                <a
                  href="https://dexscreener.com/ethereum/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faEthereum} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
