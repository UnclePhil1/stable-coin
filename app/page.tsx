"use client";

import Image from "next/image";
import React from "react";
import CreateStablecoinModal from "../components/create";
import Nav from "@/components/nav";

interface StablecoinCardProps {
  name: string;
  symbol: string;
  createdBy: {
    name: string;
    logo: string;
    date: string;
  };
  targetFiat: string;
  totalSupply: string;
  conversionRate: {
    coin: number;
    fiat: number;
  };
}

const StablecoinCard = ({
  name,
  symbol,
  createdBy,
  targetFiat,
  totalSupply,
  conversionRate,
}: StablecoinCardProps) => {
  return (
    <div className="bg-primary/60 border border-secondary/10 rounded-xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">$</span>
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400">({symbol})</p>
        </div>
      </div>

      {/* Created By */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">Created by</span>
        <div className="flex items-center gap-1">
          <Image
            src={createdBy.logo}
            alt={createdBy.name}
            width={16}
            height={16}
            className="rounded-sm"
          />
          <span className="text-gray-400 text-sm">{createdBy.date}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-400">Target Fiat</span>
          <span className="text-white">{targetFiat}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Total Supply</span>
          <span className="text-white">{totalSupply}B</span>
        </div>
      </div>

      {/* Conversion Rate */}
      <div className="flex items-center justify-between bg-[#12141A] rounded-lg p-3">
        <div className="flex items-center gap-2">
          <span className="text-white">
            {conversionRate.coin} {symbol}
          </span>
        </div>
        <span className="text-gray-400">⇌</span>
        <div className="flex items-center gap-2">
          <span className="text-white">
            {conversionRate.fiat} {targetFiat}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 bg-secondary text-white p-2 rounded-lg hover:bg-secondary/80 transitio text-smn">
          Mint
        </button>
        <button className="flex-1 bg-[#12141A] text-white p-2 rounded-lg hover:bg-secondary/80 transition text-sm">
          Redeem
        </button>
        <button className="w-10 h-10 bg-[#12141A] text-white rounded-lg flex items-center justify-center hover:bg-secondary transition text-sm">
          +
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const stablecoins = [
    {
      name: "USD COIN",
      symbol: "USDC",
      createdBy: {
        name: "Circle",
        logo: "/circle-logo.png",
        date: "94 days",
      },
      targetFiat: "USD",
      totalSupply: "58.92",
      conversionRate: {
        coin: 1,
        fiat: 1,
      },
    },
    // Add more stablecoins as needed
  ];

  return (
    <div className="min-h-screen bg-[#020314] text-white pt-6">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32 text-center">
        <p className="text-gray-400 mb-4">
          Mint, redeem, and customize stablecoins effortlessly
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-12 max-w-3xl mx-auto leading-tight">
          Create and Manage
          <br />
          Your Stablecoins on Solana
        </h1>

        <CreateStablecoinModal />

        {/* Coin Circle Animation */}
        {/* Euro Coin */}
        <div className="lg:absolute top-[70%] left-1/3 -translate-x-1/2 hiddeon">
          <div className="w-14 h-14 bg-eth rounded-full flex items-center justify-center">
            <Image
              src="/images/eth.png"
              alt="Euro"
              width={500}
              height={300}
              className="w-14 h-14"
            />
          </div>
        </div>

        {/* USDT Coin */}
        <div className="lg:absolute top-[30%] left-[15%] -translate-x-1/2 bottom-0 hiddeon">
          <div className="w-14 h-14 bg-usdt rounded-full flex items-center justify-center">
            <Image
              src="/images/usdt.png"
              alt="Euro"
              width={500}
              height={300}
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Dollar Coin */}
        <div className="lg:absolute right-[10%] -translate-x-1/2 top-[40%] hiddeon">
          <div className="w-14 h-14 bg-usdc rounded-full flex items-center justify-center">
            <Image
              src="/images/dol.png"
              alt="Euro"
              width={500}
              height={300}
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-secondary/10 p-4 rounded-lg my-10">
          <div className="flex justify-between items-center p-4 bg-primary rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stablecoins.map((stablecoin) => (
                <StablecoinCard key={stablecoin.symbol} {...stablecoin} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-secondary/10">
        <div className="mx-auto px-4 py-6 text-center text-gray-300 flex justify-between items-center">
          <p className="mb-2 hidden md:flex">
            © 2024 stdl. All rights reserved.
          </p>
          <p className="mb-2">
            Powered by{" "}
            <a
              href="https://stable.fun/"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              stable.fun
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
