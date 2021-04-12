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
        <base href="/" />
        <meta charset="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="%PUBLIC_URL%/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="%PUBLIC_URL%/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="%PUBLIC_URL%/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="%PUBLIC_URL%/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="%PUBLIC_URL%/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="%PUBLIC_URL%/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="%PUBLIC_URL%/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="%PUBLIC_URL%/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="%PUBLIC_URL%/android-icon-192x192.png"
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
          sizes="96x96"
          href="%PUBLIC_URL%/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="%PUBLIC_URL%/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="%PUBLIC_URL%/ms-icon-144x144.png"
        />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B6DE7" />
        <meta name="description" content="Yo! Human" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Yo! Human</title>
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
