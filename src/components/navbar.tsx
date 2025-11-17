"use client";
import { Moon, Search, Sun } from "lucide-react";
import Link from "next/link";
import SearchComponents from "./search-components";

const items = [
  { label: "Components", href: "/components/navbar" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-1000 flex w-full items-center justify-between border-b border-neutral-800/50 bg-black/80 p-4 md:fixed md:px-10 md:py-4">
      <Link href="/">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Cool UI</h1>
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
        <a
          href="https://github.com/deepu7d"
          target="_blank"
          className="hover:text-neutral-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/deepanshu-s-61825824a/"
          className="hover:text-neutral-200"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 11v5" />
            <path d="M8 8v.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 1 0 -4 0" />
            <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
          </svg>
        </a>
        {/* <button className="flex">
          <Moon className="h-5 w-5" />
        </button> */}
        <SearchComponents />
      </ul>
    </nav>
  );
}
