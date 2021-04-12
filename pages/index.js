export const config = { amp: true };
import Head from "next/head";

const main = {
  padding: "5rem 0",
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
        <title>YoHuman</title>
        <link rel="icon" href="/favicon.ico" />
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