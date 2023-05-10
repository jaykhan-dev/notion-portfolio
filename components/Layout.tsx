import React from "react";
import styles from "@/styles/wallpapers.module.css";
import Image from "next/image";

export default function Layout({ background }: any) {
  return (
    <div>
      <div className={styles.background}>
        <Image src={background} alt="background" layout="fill" width={100} />
      </div>
    </div>
  );
}
