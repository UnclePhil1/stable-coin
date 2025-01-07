import { Stablecoin } from "@/types/stablecoin";
import { AnchorProvider, BN, Program, setProvider } from "@coral-xyz/anchor";
import { useConnection, useWallet, WalletNotSelectedError } from "@solana/wallet-adapter-react";
import idl from "@/types/stablecoin.json";
import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);
const programId = new PublicKey(idl.address);

interface Stablecoins {
    pubkey: PublicKey;
    symbol: string;
    decimals: number;
    totalSupply: BN;
    price: BN;
}

const ViewStablecoins = () => {
  const placeholderImage = "/images/dol.png"; 
  const wallet = useWallet();
  const {connection} = useConnection();
  const [coins, setCoins] = useState<Stablecoins[]>([]);

  const formatNumber = (bn: BN, decimals: number): string => {
    const value = bn.toString();
    if (value.length <= decimals) {
        return "0." + "0".repeat(decimals - value.length) + value;
    }
    const integerPart = value.slice(0, -decimals);
    const decimalPart = value.slice(-decimals);
    return `${integerPart}.${decimalPart}`;
};
  

  const getProvider = () => {
      if (!wallet.publicKey) {
        throw new WalletNotSelectedError();
    }
  
    if (!wallet.signTransaction || !wallet.signAllTransactions) {
        throw new Error("Wallet does not support signTransaction or signAllTransactions");
    }
      const provider = new AnchorProvider(connection, {
        publicKey: wallet.publicKey,
        signTransaction: wallet.signTransaction,
        signAllTransactions: wallet.signAllTransactions,
    },AnchorProvider.defaultOptions() );
      setProvider(provider);
      return provider;
    }
  const getStableCoins = async () => {
    try {
        const anchorProvider = getProvider();
        const program = new Program<Stablecoin>(idl_object, anchorProvider);

        Promise.all((await connection.getParsedProgramAccounts(programId)).map(async coin => ({
            ...(await program.account.stablecoin.fetch(coin.pubkey)),
            pubkey: coin.pubkey
        }))).then(stablecoins => {
            console.log("Fetched banks: ", stablecoins);
            setCoins(stablecoins);
        })
      
    } catch (error) {
        console.error("Error while fetching banks: " + error);
    }
}

useEffect(() => {
    getStableCoins();
}, []);
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Your Created Stablecoins
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.length > 0 ? (
              coins.map((stablecoin, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                      <div className="p-6">
                          <div className="flex items-center mb-4">
                              <img
                                  src={placeholderImage}
                                  alt={stablecoin.symbol}
                                  className="w-12 h-12 rounded-full mr-4"
                              />
                              <div>
                                  <h2 className="text-xl font-semibold text-blue-900">
                                      {stablecoin.symbol}
                                  </h2>
                                  <p className="text-gray-600 text-sm">
                                      Address: {stablecoin.pubkey.toBase58()}
                                  </p>
                              </div>
                          </div>
                          <div className="mb-2">
                              <span className="font-medium text-gray-700">
                                  Total Supply:
                              </span>{" "}
                              <span className="text-gray-900">
                                  {formatNumber(stablecoin.totalSupply, stablecoin.decimals)}
                              </span>
                          </div>
                          <div>
                              <span className="font-medium text-gray-700">Price:</span>{" "}
                              <span className="text-gray-900">${formatNumber(stablecoin.price, stablecoin.decimals)}</span>
                          </div>
                      </div>
                      <div className="bg-gray-50 p-4 text-center">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                              View Details
                          </button>
                      </div>
                  </div>
              ))
          ) : (
              <div className="text-center col-span-full text-gray-500 py-8">
                  No stablecoins created yet.
              </div>
          )}
      </div>
  </div>
</div>
)
};

export default ViewStablecoins;