import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MintStablecoin = () => {
  return (
    <div className="flex justify-center items-center md:h-screen">
      <div className="flex flex-col md:flex-row md:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Mint Stablecoins Instantly Effortlessly and Transparent
          </h1>
          <p className="text-gray-700 mb-4">
            Our system has an integration of a public oracle that ensures
            accurate and real-time exchange rates between your collateral and
            the stablecoin.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Learn More &raquo;
          </button>
        </div>
        <div className="md:w-1/2 bg-gray-50 p-8 rounded-r-lg">
          <h2 className="text-xl font-bold mb-4">
            Enter the exact amount you want to mint and confirm the transaction.
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Select stablecoin
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
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Enter Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-full p-2 border rounded focus:outline-secondary/50"
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-700">Current Exchange Rate</span>
            <span className="text-gray-700">1 SOLFI = 1 USD</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Wallet Address</label>
            <input
              type="text"
              value=""
              className="w-full p-2 border rounded bg-gray-100 focus:outline-secondary/50"
            />
            <button className="mt-2 text-blue-600 hover:underline">Edit</button>
          </div>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Mint Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintStablecoin;
