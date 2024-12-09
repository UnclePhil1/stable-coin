import Link from "next/link"
import { Wallet } from 'lucide-react'
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020314] text-white pt-6">
      {/* Navigation */}
      <nav className="w-[80%] border border-secondary/10 shadow-md shadow-secondary/10 rounded-full mx-auto px-4 py-4 flex items-center justify-between">
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

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32 text-center">
        <p className="text-gray-400 mb-4">
          Mint, redeem, and customize stablecoins effortlessly
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-12 max-w-3xl mx-auto leading-tight">
          Create and Manage<br />
          Your Stablecoins on Solana
        </h1>
        
        <button 
          className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-4 text-lg"
        >
          Create Stablecoin
        </button>

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

