import React from "react";
import styles from "@/styles/wallpapers.module.css";
import Image from "next/image";

export default function Layout({ background, title }: any) {
  return (
    <div>
      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <Image src={background} alt="Page background" fill />
      </div>
      <div>
        <h1 className="lg:text-6xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
