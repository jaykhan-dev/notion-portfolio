import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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
  { path: "/contact", label: "Contact" },
];

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-black border-b border-white/40 fixed top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:w-2/3 md:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:block">
            <div>
              <Link
                href="/"
                className="text-2xl text-white font-bold uppercase"
              >
                Jay Khan
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:flex pb-3 md:pb-0 md:mt-0 ${
            navbar ? "lg:flex" : "hidden"
          }`}
        >
          {links.map((link: Links) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:bg-purple-500 duration-300 lg:border-l border-white/50 py-2 px-4 uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
