import React from "react";

export default function PageHeader({ title, image, description }: any) {
  return (
    <div className={image}>
      <div className="bg-gradient-to-r from-black via-black/40 to-black h-96 grid place-items-center p-4">
        <div className="lg:w-2/3 mx-auto">
          <h1 className="lg:text-6xl text-4xl font-bold">{title}</h1>
          <p className="my-4 text-xl text-gray-200 font-bold lg:w-1/2 leading-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
