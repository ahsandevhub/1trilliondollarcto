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
            href="https://x.com/1tonethcto?s=21&t=d8b8rq8SqTvhA3NSEZytJw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://t.me/+v_HDjkhisLdlMGE1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3?t=1735138501569"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 text-2xl transition-colors"
          >
            <FontAwesomeIcon icon={faChartBar} />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0x64d8ac8b156807ebea39f55cf4a98016bea0ade3"
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
          {isMenuOpen ? "✖" : "☰"} {/* Change icon based on menu state */}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 mt-14 w-full bg-gray-800 text-white p-4 space-y-4 rounded-md">
            <Link
              href="#home"
              className="block hover:text-sky-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block hover:text-sky-400"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#tokenomics"
              className="block hover:text-sky-400"
              onClick={toggleMenu}
            >
              Tokenomics
            </Link>
            <Link
              href="#socials"
              className="block hover:text-sky-400"
              onClick={toggleMenu}
            >
              Socials
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
