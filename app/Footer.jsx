import Logo from "@/public/1t coin logo new.png";
import {
  faEthereum,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 relative flex flex-col justify-center items-center text-white py-8">
      <Image
        src={Logo}
        alt="1t logo"
        className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-auto"
      />
      <div className="container mx-auto space-y-4 mt-8 px-6 text-center">
        {/* Footer Links */}
        <div className="icons space-x-4">
          <a
            href="https://x.com/1tonethcto?s=21&t=d8b8rq8SqTvhA3NSEZytJw"
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

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} 1trilliondollarcto. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
