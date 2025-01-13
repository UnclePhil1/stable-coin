import type { Metadata } from "next";
import "./globals.css";
import { Trispace } from "next/font/google";
import { AuthProvider } from '@/components/WalletAuth';

export const metadata: Metadata = {
  title: "HODLL",
  description:
    "Create your stablecoins based on the yield-bearing stablebonds tokens.",
};

// Google Fonts
const inter = Trispace({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
