import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import ChainContext from "../context/Chain";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Dogechain, Ethereum, Polygon, Mumbai, Goerli, Base } from "@thirdweb-dev/chains"

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedChain, setSelectedChain] = useState("ethereum");

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      <ThirdwebProvider 
        activeChain={selectedChain}
        supportedChains={[Dogechain, Ethereum, Polygon, Mumbai, Goerli, Base]}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ChainContext.Provider>
  );
}

export default MyApp;
