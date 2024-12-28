"use client";

import Logo from "@/public/1t coin logo new.png";
import {
  faEthereum,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartBar,
  faCheck,
  faCopy,
  faExchangeAlt,
  faExternalLinkAlt,
  faMoneyBillWave,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x64d8ac8b156807ebea39f55cf4a98016bea0ade3");
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // Reset after 2 seconds
    }, 2000);
  };

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
      <div
        id="#home"
        className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-b from-gray-950 to-black relative overflow-hidden"
      >
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
          <div className="container max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="left lg:text-start text-center text-white space-y-6">
              <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent">
                <div>Trillion</div>
                Dollar Coin
              </h1>
              <p className="text-xl lg:text-3xl text-gray-300">
                LP BURN AND 0 TAX!
              </p>
              <p className="break-words md:text-xl sm:text-lg text-sm">
                <span className="bg-gray-800 px-1 rounded">CA:</span>{" "}
                0x64D8AC8b156807EbEa39f55cf4A98016bEa0ADE3
              </p>
              <div className="icons flex lg:justify-normal justify-center space-x-6">
                <a
                  href="https://x.com/1TrillionCoinIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://t.me/+v_HDjkhisLdlMGE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3?t=1735138501569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faChartBar} />
                </a>
                <a
                  href="https://etherscan.io/token/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-4xl transition-colors"
                >
                  <FontAwesomeIcon icon={faEthereum} />
                </a>
              </div>
              <a
                href="https://dexscreener.com/ethereum/0xa51e5C7d7d36e7fA6173a229A887A403C67C611F"
                target="_blank"
                rel="noopener noreferrer"
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
                className="h-[300px] md:h-[550px] w-auto drop-shadow-silver-glow"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div
        id="about"
        className="min-h-screen flex items-center bg-gradient-to-r from-gray-950 via-gray-800 to-black text-white"
      >
        <div className="container max-w-screen-xl mx-auto sm:px-6 py-16 sm:mt-8 text-center md:text-left">
          <div className="grid items-center grid-cols-1 gap-12">
            {/* Left Section: Embedded DEXTools Link */}
            <div className="h-full w-full flex justify-center items-center">
              <iframe
                id="dextools-widget"
                title="DEXTools Trading Chart"
                src="https://www.dextools.io/widget-chart/en/ether/pe-light/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?theme=dark&chartType=3&chartResolution=100&drawingToolbars=false"
                className="sm:h-full w-full max-w-screen-md sm:aspect-video h-72 sm:rounded-md border border-gray-600"
              ></iframe>
            </div>

            {/* Right Section: About Details */}
            <div className="text-center max-w-screen-md px-6 mx-auto text-gray-300 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent mb-8">
                About Trillion Dollar Coin
              </h2>
              <p className="text-base">
                Community Takeover of the 1T Coin: A Trillion Dollar Coin for
                the People by the people. The 1T CTO is a satirical
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
                  href="https://t.me/+v_HDjkhisLdlMGE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a
                  href="https://x.com/1TrillionCoinIO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3?t=1735138501569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors"
                >
                  <FontAwesomeIcon icon={faChartBar} />
                </a>
                <a
                  href="https://etherscan.io/token/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3"
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

      {/* Tokensniffer */}
      <div
        id="tokensniffer"
        className="min-h-screen flex items-center bg-gradient-to-b from-black via-gray-800 to-gray-800 text-white"
      >
        <div className="container max-w-screen-xl mx-auto sm:px-6 py-16 sm:mt-8 text-center md:text-left">
          <div className="grid items-center grid-cols-1 gap-12">
            {/* Token Sniffer Score and Iframe */}
            <div className="h-full w-full flex flex-col items-center">
              {/* Score Display */}
              <div className="txt mb-8">
                <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent">
                  Achieving A Perfect Score
                </h2>
                <p className="mt-3 text-3xl text-center text-slate-300">
                  Token Sniffer
                </p>
              </div>

              {/* Browser-Like Container */}
              <div className="w-full relative overflow-hidden mb-4 max-w-screen-md border border-gray-600 rounded-md bg-gray-800">
                {/* Browser Tab Bar */}
                <div className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-t-md">
                  {/* Browser Buttons */}
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  {/* Search Box */}
                  <div className="flex-1 flex items-center ml-4">
                    <input
                      type="url"
                      placeholder="Enter URL"
                      defaultValue={
                        "https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                      }
                      readOnly
                      className="w-full sm:text-base text-sm px-3 py-1 bg-gray-800 text-slate-200 rounded-md outline-none border border-gray-600 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                {/* Iframe */}
                {/* <iframe
                  id="token-sniffer"
                  title="Token Sniffer Score: 100/100"
                  src="https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                  className="sm:h-full w-full max-w-screen-md sm:aspect-video h-72 rounded-b-md"
                ></iframe> */}
                <a
                  href="https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/tokensniffer ss.png"}
                    alt=""
                    height={1600}
                    width={1600}
                    aria-readonly
                    className="h-full w-full max-w-screen-md rounded-b-md"
                  />
                </a>
              </div>

              <p className="bg-sky-500 px-6 py-1 text-white rounded-full font-medium sm:text-lg mt-5">
                Score: 100/100 on TokenSniffer
              </p>

              {/* Token Sniffer Link Button */}
              <div className="mt-6">
                <a
                  href="https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 border-2 sm:text-xl text-lg border-amber-200 text-white font-semibold rounded-md transition-colors space-x-3"
                >
                  <Image
                    src={"/tokensniffer.svg"}
                    width={150}
                    height={150}
                    alt=""
                    className="h-12 w-auto"
                  />
                  <span>Visit Token Sniffer</span>
                </a>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-sky-300 via-purple-400 to-violet-800 bg-clip-text text-transparent sm:mt-20 mt-16 my-8">
                Gecko Terminal
              </h2>

              {/* gecko terminal */}
              <div className="w-full relative overflow-hidden mb-4 max-w-screen-md border border-gray-600 rounded-md bg-gray-800">
                {/* Browser Tab Bar */}
                <div className="w-full flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-t-md">
                  {/* Browser Buttons */}
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  {/* Search Box */}
                  <div className="flex-1 flex items-center ml-4">
                    <input
                      type="url"
                      placeholder="Enter URL"
                      defaultValue={
                        "https://www.geckoterminal.com/eth/pools/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
                      }
                      readOnly
                      className="w-full sm:text-base text-sm px-3 py-1 bg-gray-800 text-slate-200 rounded-md outline-none border border-gray-600 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                {/* Iframe */}
                {/* <iframe
                  id="token-sniffer"
                  title="Token Sniffer Score: 100/100"
                  src="https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                  className="sm:h-full w-full max-w-screen-md sm:aspect-video h-72 rounded-b-md"
                ></iframe> */}
                <a
                  href="https://www.geckoterminal.com/eth/pools/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/geekotools.png"}
                    alt=""
                    height={1600}
                    width={1600}
                    aria-readonly
                    className="h-full w-full max-w-screen-md rounded-b-md"
                  />
                </a>
              </div>

              {/* Token Sniffer Link Button */}
              <div className="mt-6">
                <a
                  href="https://tokensniffer.com/token/eth/cks2v9buvgddj61kdvgexqaja90hz8141bz5mse9hvxo6kjaei9ux92alee0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-slate-950 border-2 sm:text-xl text-lg border-violet-500 text-white font-semibold rounded-md transition-colors space-x-3"
                >
                  <Image
                    src={"/geeko logo.png"}
                    width={150}
                    height={150}
                    alt=""
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div
        id="tokenomics"
        className="relative flex justify-center items-center bg-gradient-to-b from-gray-950 to-black text-white py-16"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/photo_2024-12-24_01-11-08.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="container py-20 z-10 max-w-screen-xl mx-auto px-6 space-y-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent mb-8">
            Tokenomics
          </h2>

          {/* Token Address */}
          <div className="flex justify-center space-x-4 items-center">
            <span className="bg-gray-700 break-all text-white px-4 py-2 rounded-md text-sm lg:text-xl">
              0x64d8ac8b156807ebea39f55cf4a98016bea0ade3
            </span>
          </div>
          <div className="buttons flex justify-center">
            {!copied ? (
              <button
                onClick={handleCopy}
                className="text-white text-2xl hover:text-sky-400 border border-gray-700 px-5 py-3 bg-gray-600 hover:bg-gray-700 transition-all duration-300 rounded-md flex items-center"
              >
                <FontAwesomeIcon icon={faCopy} className="mr-2" />
                Copy
              </button>
            ) : (
              <button className="text-white text-2xl bg-gradient-to-r from-green-500 to-green-700 px-5 py-3 rounded-md flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Copied!
              </button>
            )}
          </div>

          {/* Etherscan Link */}
          <div className="flex justify-center">
            <a
              href="https://etherscan.io/token/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-md text-lg md:text-xl hover:bg-gray-600 transition-all"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
              View on Etherscan
            </a>
          </div>
        </div>
      </div>

      {/* How to buy */}
      <div className="flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-800 to-black text-white sm:py-32 py-20">
        <div className="container max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent mb-12">
            How To Buy
          </h2>

          {/* Process Cards with Glass Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Create a Wallet */}
            <div className="bg-gray-900 border border-gray-600 hover:scale-105 transition-all odd:hover:rotate-3 hover:even:-rotate-3 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <div className="bg-silver text-gray-900 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faWallet} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                1. Create a Wallet
              </h3>
              <p className="text-lg text-gray-400">
                Create a wallet with MetaMask. You can follow the easy steps
                when given the option to create a new account.
              </p>
            </div>

            {/* Step 2: Get Some ETH */}
            <div className="bg-gray-900 border border-gray-600 hover:scale-105 transition-all odd:hover:rotate-3 hover:even:-rotate-3 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <div className="bg-silver text-gray-900 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faEthereum} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                2. Get Some ETH
              </h3>
              <p className="text-lg text-gray-400">
                You can deposit $ETH into your MetaMask wallet using any crypto
                exchange of your choice.
              </p>
            </div>

            {/* Step 3: Use Uniswap */}
            <div className="bg-gray-900 border border-gray-600 hover:scale-105 transition-all odd:hover:rotate-3 hover:even:-rotate-3 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <div className="bg-silver text-gray-900 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faExchangeAlt} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                3. Use Uniswap
              </h3>
              <p className="text-lg text-gray-400">
                Connect your wallet, paste the $1T token address into Uniswap (
                <a
                  href="https://app.uniswap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400"
                >
                  CLICK HERE
                </a>
                ). Now swap your ETH to buy $1T.
              </p>
            </div>

            {/* Step 4: Get Rich */}
            <div className="bg-gray-900 border border-gray-600 hover:scale-105 transition-all odd:hover:rotate-3 hover:even:-rotate-3 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <div className="bg-silver text-gray-900 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">
                4. Get Rich
              </h3>
              <p className="text-lg text-gray-400">
                Lastly, HOLD for 1 Trillion market cap!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
