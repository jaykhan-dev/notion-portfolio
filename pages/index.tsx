import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`grid place-items-center h-screen ${inter.className}`}>
      <Head>
        <title>Jay Khan</title>
        <meta name="description" content="Jay Khan Portfolio" />
      </Head>
      <div>
        <h1>Jay Khan</h1>
      </div>
    </main>
  );
}
