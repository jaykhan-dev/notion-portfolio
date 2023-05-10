import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Featured({ title, description, image, link }: any) {
  return (
    <div>
      <h1 className="lg:text-4xl">{title}</h1>
      <p>{description}</p>
      {/* <Image src={image.url} alt={title} width={400} height={400} /> */}
      <button>{link}</button>
    </div>
  );
}
