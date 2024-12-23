"use client"

import Image from "next/image"
import React from 'react';
import CreateStablecoinModal from '../components/create';
import Nav from "@/components/nav";

export default function Home() {

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
          Create and Manage<br />
          Your Stablecoins on Solana
        </h1>
        
        
        <CreateStablecoinModal />

        {/* Coin Circle Animation */}
            {/* Euro Coin */}
            <div className="lg:absolute top-[70%] left-1/3 -translate-x-1/2 hiddeon">
              <div className="w-14 h-14 bg-eth rounded-full flex items-center justify-center">
                <Image 
                  src='/images/eth.png'
                  alt='Euro'
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
                  src='/images/usdt.png'
                  alt='Euro'
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
                  src='/images/dol.png'
                  alt='Euro'
                  width={500}
                  height={300}
                  className="w-10 h-10"
                />
              </div>
            </div>
      </main>
      <footer className='border-t border-secondary/10'>
        <div className="mx-auto px-4 py-6 text-center text-gray-300 flex justify-between items-center">
          <p className="mb-2 hidden md:flex">© 2024 stdl. All rights reserved.</p>
          <p className="mb-2">Powered by <a href="https://stable.fun/" className="text-secondary hover:text-secondary/80 transition-colors">stable.fun</a></p>
        </div>
      </footer>
    </div>
  )
}

