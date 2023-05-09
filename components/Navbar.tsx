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
    <nav className="bg-zinc-900 fixed top-0 w-full p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">Jay Khan</Link>
        </div>
        <div className="flex items-center space-x-4">
          {links.map((link: Links) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-purple-500 duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
