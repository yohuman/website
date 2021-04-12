import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YoHuman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.svg" alt="YoHuman Logo" />
      </main>

      <footer></footer>
    </div>
  );
}
