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
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container z-50 max-w-screen-xl w-[96%] backdrop-blur bg-gray-950/50 fixed sm:top-4 top-2 left-1/2 -translate-x-1/2 text-slate-200 border border-slate-800 shadow-lg rounded-md">
      <div className="sm:px-5 sm:py-4 px-3 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <Image src={Logo} alt="1t logo" className="h-8 w-auto" />
          <div className="txt">
            <h1 className="logo md:block hidden text-xl font-bold">
              Trillion Dollar Coin
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link
            href="#home"
            className="group relative hover:text-sky-400 transition-all duration-300"
          >
            Home
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] duration-300 bg-sky-400 w-0 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="#about"
            className="group relative hover:text-sky-400 transition-all duration-300"
          >
            About
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] duration-300 bg-sky-400 w-0 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="#tokenomics"
            className="group relative hover:text-sky-400 transition-all duration-300"
          >
            Tokenomics
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] duration-300 bg-sky-400 w-0 group-hover:w-full transition-all"></span>
          </Link>
          <Link
            href="#socials"
            className="group relative hover:text-sky-400 transition-all duration-300"
          >
            Socials
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] duration-300 bg-sky-400 w-0 group-hover:w-full transition-all"></span>
          </Link>
        </nav>

        <div className="icons flex space-x-4">
          <a
            href="https://x.com/1T_ERC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://t.me/TrillionDollarCoin_ETH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f?t=1735138501569"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faChartBar} />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0xa51e5c7d7d36e7fa6173a229a887a403c67c611f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faEthereum} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-[#010314] text-lg font-medium shadow-lg">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/tokenomics"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link
                  href="/socials"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Socials
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-pink-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        )} */}
      </div>
    </header>
  );
};

export default Header;
