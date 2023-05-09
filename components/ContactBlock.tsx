import React from "react";
import styles from "../styles/wallpapers.module.css";

export default function ContactBlock() {
  return (
    <div className={styles.contactBlockBg}>
      <div className="bg-gradient-to-r from-blue-500/0 via-purple-500/40 to-black w-full h-full grid place-items-center text-center">
        <div className="grid place-items-center">
          <p className="uppercase font-bold">contact</p>
          <h2 className="lg:text-6xl font-black my-4">Let collaborate</h2>
          <button className="bg-black text-white rounded-full p-4 px-6 uppercase font-bold border-4 shadow-xl animate-pulse border-purple-500">
            Get started
          </button>
        </div>
      </div>
      <div className="bg-black py-6 w-full grid place-items-center font-mono text-sm uppercase">
        <div className="flex items-center space-x-4">
          <a href="">
            <p>Github</p>
          </a>
          <a href="">
            <p>Twitter</p>
          </a>
          <a href="">
            <p>jaykhan.sound@gmail.com</p>
          </a>
          {/* <a href="">
            <p>khan@getalby.com</p>
          </a> */}
          <p className="border-l border-white/20 px-4">
            Made with Next JS + Notion
          </p>
        </div>
      </div>
    </div>
  );
}
