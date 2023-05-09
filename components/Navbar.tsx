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
    <nav className="bg-zinc-900 fixed top-0 w-full">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">Jay Khan</Link>
        </div>
        <div className="lg:flex items-center hidden">
          {links.map((link: Links) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:bg-purple-500 duration-300 border-l border-white/50 py-2 px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
