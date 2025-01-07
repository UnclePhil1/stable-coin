import * as anchor from "@coral-xyz/anchor";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Program, AnchorProvider, web3, utils, setProvider } from '@coral-xyz/anchor';
import { Stablecoin } from "@/types/stablecoin";
import idl from "@/types/stablecoin.json";
import { PublicKey } from '@solana/web3.js';
import { useConnection, useWallet, WalletNotSelectedError } from "@solana/wallet-adapter-react";


const idl_string = JSON.stringify(idl);
const idl_object = JSON.parse(idl_string);
const programId = new PublicKey(idl.address);

const CreateStablecoinModal = () => {
  const wallet = useWallet();
  const [image, setImage] = useState<string | null>(null);
  const [symbol, setSymbol] = useState<string>("");
  const {connection} = useConnection();

  useEffect(() => {
    console.log(symbol);
    console.log(2);
    console.log(new anchor.BN(100));
  }, [symbol])
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const createStableCoin = async () => {
    try {
      if (!wallet.publicKey) throw new WalletNotSelectedError();
      const anchorProvider = getProvider();
      const program = new Program<Stablecoin>(idl_object, anchorProvider);
      const [stableCoinPDA, _] = web3.PublicKey.findProgramAddressSync(
        [anchor.utils.bytes.utf8.encode("stablecoin")],
        programId
    );
    
      // await program.methods.initialize(symbol, 2, new anchor.BN(100)).accountsStrict({ 
      //   stablecoin: stableCoinPDA,
      //   authority: wallet.publicKey,
      //   systemProgram: web3.SystemProgram.programId
      // }).rpc();

      await program.methods.initialize(symbol, 2, new anchor.BN(100)).accounts({ 
        authority: wallet.publicKey,
      }).rpc();

      console.log("Stable coin created successfully!");

      setSymbol("")

    } catch (error) {
      console.log(error)
      console.error("Error while creating a stable coin: " + error);
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-4 text-lg">
            Create Stablecoin
          </button>
        </DialogTrigger>
        <DialogContent className="w-full flex flex-row p-0 rounded-none w-auto justify-center">
          <div className="w-auto hidden md:flex bg-secondary rounded-l-md flex-col justify-center items-center text-center px-[5%]">
            <DialogTitle className="text-white text-4xl font-bold">Self Owned</DialogTitle>
            <DialogDescription className="text-white text-4xl font-bold">Steady Value</DialogDescription>
          </div>
          <div className="w-full md:w-[600px] flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-primary text-3xl font-bold">
              Create your stablecoin
            </h1>
            <p className="text-primary text-md font-bold">
              Define your coins properties below{" "}
            </p>
            <div className="mt-8">
              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-primary"
                >
                  Token Image
                </label>
                <label className="block text-center cursor-pointer border-2 border-primary rounded-full">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-24 h-24 object-cover rounded-full mx-auto"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-gray-500">+</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-500"
                >
                  Token Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="e.g. My Stablecoin"
                  className="border rounded-md p-2 w-full md:w-[400px] focus:outline-secondary/50"
                />
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="symbol"
                  className="text-sm font-medium text-gray-500"
                >
                  Token Symbol
                </label>
                <input
                  type="text"
                  id="symbol"
                  placeholder="e.g. STBL"
                  onChange={(e) => setSymbol(e.target.value)}
                  className="border rounded-md p-2 w-full md:w-[400px] focus:outline-secondary/50"
                />
              </div>

              <div className="flex flex-col py-4 justify-start items-start">
                <label
                  htmlFor="type"
                  className="text-sm font-medium text-gray-500"
                >
                  Fiat Bond
                </label>
                <Select>
                  <SelectTrigger className="md:w-[400px] focus:outline-secondary/50 border">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <button className="bg-secondary text-white px-4 py-2 mt-4 rounded-md" onClick={createStableCoin} disabled={!wallet.publicKey}>Create</button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateStablecoinModal;
