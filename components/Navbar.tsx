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
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
