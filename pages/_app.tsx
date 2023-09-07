import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ChainContext from "../context/Chain";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { supportedChains } from "../context/SupportedChains"

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider 
        activeChain={selectedChain}
        supportedChains={supportedChains}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

export default MyApp;
