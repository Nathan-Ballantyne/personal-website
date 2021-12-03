import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nathan Ballantyne</title>
        <meta name="description" content="Nathan Ballantyne Personal Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nathan Ballantyne
        </h1>

        <p className={styles.description}>
          Coming Soon 🚧
        </p>

        
      </main>
    </div>
  )
}

export default Home
