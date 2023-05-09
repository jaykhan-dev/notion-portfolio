import React from "react";
import Link from "next/link";

interface Links {
  path: string;
  label: string;
}

const links = [
  //{ path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/music", label: "Music" },
  { path: "/blog", label: "Blog" },
  { path: "/resume", label: "Resume" },
  { path: "/digital-products", label: "Digital Products" },
];

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-white/40 fixed top-0 w-full z-50">
      <div className="bg-purple-500 py-2 mx-auto">
        <div className="flex items-center justify-end lg:w-2/3 mx-auto px-4">
          <p>New digital product!</p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between lg:w-2/3 mx-auto">
        <div className="px-4 uppercase font-bold py-2">
          <Link href="/" className="">
            Jay Khan
          </Link>
        </div>
        <div className="lg:flex items-center hidden">
          {links.map((link: Links) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:bg-purple-500 duration-300 border-l border-white/50 py-2 px-4 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
