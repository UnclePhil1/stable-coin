import { Wallet } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="md:w-[80%] border border-secondary/10 shadow-md shadow-secondary/10 rounded-full mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-white font-semibold">HODLL</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/view-stablecoins" className="text-gray-300 hover:text-white transition-colors">
              View Stablecoins
            </Link>
            <Link href="/mint" className="text-gray-300 hover:text-white transition-colors">
              Mint
            </Link>
            <Link href="/redeem" className="text-gray-300 hover:text-white transition-colors">
              Redeem
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>

        <button 
          className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-6 py-2 flex items-center space-x-2"
        >
          <Wallet className="w-4 h-4" />
          <span>Connect Wallet</span>
        </button>
      </nav>
  );
};

export default Nav;