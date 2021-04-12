import { useAmp } from "next/amp";
export const config = { amp: "hybrid" };
import Head from "next/head";

const main = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const container = {
  background: "#0b6de7",
  width: "100vw",
  height: "100vh"
};

const logo = {
  width: "300px",
  height: "300px"
};

export default function Home() {
  const isAmp = useAmp();
  return (
    <div style={container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#0b6de7"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="YoHuman!" />
        <meta name="application-name" content="YoHuman!" />
        <meta name="msapplication-TileColor" content="#0b6de7" />
        <meta
          name="msapplication-TileImage"
          content="/icons/mstile-144x144.png"
        />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#0b6de7" />
        <link rel="canonical" href="https://www.yohuman.io/" />
        <meta name="description" content="YoHuman!."></meta>
        <title>YoHuman!</title>
      </Head>

      <main style={main}>
        {isAmp ? (
          <amp-img
            style={logo}
            width="300"
            height="300"
            src="/logo512.png"
            alt="YoHuman Logo"
            layout="responsive"
          />
        ) : (
          <img
            width="300"
            height="300"
            src="/logo512.png"
            alt="YoHuman Logo"
            style={logo}
          />
        )}
      </main>

      <footer></footer>
    </div>
  );
}
