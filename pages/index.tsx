import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { useEffect, useMemo, useState } from 'react';

import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks';

const Home: NextPage = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  const { canAttemptSwitch } = useSwitchNetwork();
  console.log(`Address: ${address}`);

  const WalletButton = () => <button onClick={() => connectWallet('injected')}>Connect Walllet</button>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Fantasy Book DAO</title>
        <meta name="description" content="Investing and Publishing the best in Fantasy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fantasy Book DAO</h1>
        <p className={styles.description}>Investing and Publishing the best in Fantasy</p>
        {!address ? <WalletButton /> : <p>{address}</p>}
      </main>
    </div>
  );
};

export default Home;
