"use state";

import {
  faCheck,
  faCopy,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("0x64d8ac8b156807ebea39f55cf4a98016bea0ade3");
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // Reset after 2 seconds
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-950 to-black text-white py-16">
      <div className="container max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-silver via-gray-400 to-gray-800 bg-clip-text text-transparent mb-8">
          Tokenomics
        </h2>

        {/* Token Address */}
        <div className="flex justify-center space-x-4 items-center mb-8">
          <span className="text-lg md:text-xl text-gray-300">
            Token Address:
          </span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-md text-lg md:text-xl">
            0x64d8ac8b156807ebea39f55cf4a98016bea0ade3
          </span>

          {!copied ? (
            <button
              onClick={handleCopy}
              className="bg-gradient-to-r from-silver via-gray-500 to-gray-700 text-white px-4 py-2 rounded-md text-2xl md:text-3xl hover:bg-gradient-to-r hover:from-silver hover:to-gray-600 transition-colors"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          ) : (
            <span className="bg-gradient-to-r from-silver via-gray-500 to-gray-700 text-white px-4 py-2 rounded-md text-2xl md:text-3xl flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Copied!
            </span>
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
  );
};

export default Tokenomics;
