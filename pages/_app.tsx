import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// 4 = Rinkby
const supportedChainIds = [4];

const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainIds}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
