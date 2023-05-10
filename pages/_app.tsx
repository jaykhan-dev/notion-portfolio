import ContactBlock from "@/components/ContactBlock";
import FlowbiteNav from "@/components/FlowbiteNav";
import Navbar from "@/components/Navbar";
import ResNav from "@/components/ResNav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResNav />

      <Component {...pageProps} />
      {/* <button className="absolute bottom-10 right-10">Contact</button> */}
      <ContactBlock />
    </>
  );
}
