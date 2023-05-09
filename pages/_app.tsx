import FlowbiteNav from "@/components/FlowbiteNav";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <FlowbiteNav /> */}
      <Component {...pageProps} />
      {/* <button className="absolute bottom-10 right-10">Contact</button> */}
    </>
  );
}
