"use client";
import { Moon, Search, Sun } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
const items = [
  { label: "Components", href: "/components/navbar" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-800/50 bg-black p-4 lg:px-10 lg:py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold lg:text-4xl">Cool UI</h1>
      </Link>
      <ul className="text-md flex items-center justify-center gap-6 text-neutral-400">
        {items.map((item) => (
          <li
            key={item.href}
            className="hidden hover:text-neutral-200 lg:inline"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <a href="https://github.com/deepu7d" className="hover:text-neutral-200">
          <svg
            className="h- w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://x.com/deepu7d" className="hover:text-neutral-200">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <button className="flex">
          <Moon className="h-5 w-5" />
        </button>
        <button className="hidden w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-neutral-400/50 bg-transparent px-6 py-2 lg:flex">
          <Search className="p-1" />
          <span className="hover:text-neutral-200">Search Components</span>
        </button>
      </ul>
    </nav>
  );
}
