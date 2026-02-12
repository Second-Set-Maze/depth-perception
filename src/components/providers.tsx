"use client";

import { ReactNode, useState } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { wagmiConfig } from "@/lib/wagmi";
import "@rainbow-me/rainbowkit/styles.css";

// Root client-side provider tree.
// Wraps the application with wagmi (wallet connection state), react-query
// (async data caching used internally by wagmi), and RainbowKit (wallet UI).
// SessionProvider and SIWE authentication are added in Task 4.4.
export default function Providers({ children }: { children: ReactNode }) {
  // Lazily initialize QueryClient so it is created once per component mount
  // and not recreated on every render (avoids cache loss).
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#c1ff72",
            accentColorForeground: "#021f53",
            borderRadius: "medium",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
