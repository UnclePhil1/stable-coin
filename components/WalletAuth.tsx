"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  WagmiProvider,
  createConfig,
  useAccount,
  useConnect,
  useBalance,
  http,
} from "wagmi";
import { embeddedWallet, userHasWallet } from "@civic/auth-web3";
import { CivicAuthProvider, UserButton, useUser } from "@civic/auth-web3/react";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask } from 'wagmi/connectors'

// Configure Wagmi
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    embeddedWallet(),
    injected(),
    metaMask(),
  ],
});

// Create React Query client
const queryClient = new QueryClient();

// Main authentication wrapper component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <CivicAuthProvider
          clientId="520ad773-23f7-4b55-9457-5d6b96bcfc9c" // Replace with your Civic client ID
          walletConnectors={[embeddedWallet()]}
        >
          {children}
        </CivicAuthProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

// Wallet connection component
export function WalletConnection() {
  const userContext = useUser();
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const balance = useBalance({
    address: userHasWallet(userContext)
      ? (userContext.walletAddress as `0x${string}`)
      : undefined,
  });

  const connectExistingWallet = () => {
    connect({ connector: connectors[0], });
  };

  const createWallet = async () => {
    if (userContext.user && !userHasWallet(userContext)) {
        return userContext.createWallet().then(connectExistingWallet);
    }
  };

  if (!userContext.user) {
    return (
      <div className="flex flex-col items-center gap-4">
        <UserButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <UserButton />
      {userContext.user && (
        <div>
          {!userHasWallet(userContext) && (
            <p>
              <button onClick={createWallet}>Create Wallet</button>
            </p>
          )}
          {userHasWallet(userContext) && (
            <>
              <p>Wallet address: {userContext.walletAddress}</p>
              <p>
                Balance:{" "}
                {balance?.data
                  ? `${(
                      BigInt(balance.data.value) / BigInt(1e18)
                    ).toString()} ${balance.data.symbol}`
                  : "Loading..."}
              </p>
              {isConnected ? (
                <p>Wallet is connected</p>
              ) : (
                <button onClick={connectExistingWallet}>Connect Wallet</button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
