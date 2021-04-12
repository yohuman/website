export const config = { amp: true };
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
  return (
    <div style={container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Yo Human!" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="%PUBLIC_URL%/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="%PUBLIC_URL%/favicon-16x16.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
        <link
          rel="mask-icon"
          href="%PUBLIC_URL%/safari-pinned-tab.svg"
          color="#d83934"
        />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Yo Human!" />
        <meta name="application-name" content="Yo Human!" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="%PUBLIC_URL%/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main style={main}>
        <amp-img
          style={logo}
          width="300"
          height="300"
          src="/logo512.png"
          alt="YoHuman Logo"
          layout="responsive"
        />
      </main>

      <footer></footer>
    </div>
  );
}
