import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from 'three';

interface PartialVantaEffect {
  destroy: () => void;
}

const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState<number | PartialVantaEffect>(
    0
  );
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xB8E4F0,
          backgroundColor: 0x6E3CBC
        })
      );
    }
    return () => {
      if (vantaEffect && typeof vantaEffect === 'object') vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={styles.container} ref={vantaRef}>
      <Head>
        <title>Nathan Ballantyne</title>
        <meta
          name='description'
          content='Nathan Ballantyne Personal Portfolio'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Nathan Ballantyne</h1>

        <p className={styles.description}>Coming Soon 🚧</p>
      </main>
    </div>
  );
};

export default Home;
