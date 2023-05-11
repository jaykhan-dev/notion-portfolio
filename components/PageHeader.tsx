import React from "react";

export default function PageHeader({ title, image }: any) {
  return (
    <div className={image}>
      <div className="bg-gradient-to-r from-black via-black/40 to-black h-96 grid place-items-center">
        <h1 className="lg:w-2/3 mx-auto lg:text-6xl text-4xl font-bold py-20">
          {title}
        </h1>
      </div>
    </div>
  );
}
