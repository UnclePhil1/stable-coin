"use client";
// import { Wallet } from "lucide-react";
import Link from "next/link";
// import dynamic from "next/dynamic";
// import { useWallet } from "@solana/wallet-adapter-react";
// import { useMemo } from "react";
import { WalletConnection } from "./WalletAuth";

// const WalletMultiButtonDynamic = dynamic(
//   async () =>
//     (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//   { ssr: false }
// );

const Nav = () => {
  // const { connected, publicKey } = useWallet();

  // const truncatedAddress = useMemo(() => {
  //   if (!publicKey) return null;
  //   const address = publicKey.toBase58();
  //   return `${address.slice(0, 4)}...${address.slice(-4)}`;
  // }, [publicKey]);

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
          <Link
            href="/view-stablecoins"
            className="text-gray-300 hover:text-white transition-colors"
          >
            View Stablecoins
          </Link>
          <Link
            href="/mint"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Mint
          </Link>
          <Link
            href="/redeem"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Redeem
          </Link>
          <Link
            href="/help"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Help
          </Link>
        </div>
      </div>
      {/* <WalletMultiButtonDynamic className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-6 py-2 flex items-center space-x-2">
        {connected ? (
          truncatedAddress
        ) : (
          <>
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </>
        )}
      </WalletMultiButtonDynamic> */}
      <WalletConnection />
    </nav>
  );
};

export default Nav;
