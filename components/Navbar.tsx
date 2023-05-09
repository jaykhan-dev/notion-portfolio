import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-zinc-900 fixed top-0 w-full p-4">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/projects">Projects</Link>
          <Link href="/music">Music</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
