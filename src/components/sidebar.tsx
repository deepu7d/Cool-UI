"use client";

import { useState } from "react";
import { componentsList } from "@/lib/components";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function SiderBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="lg:hidden fixed top-5 left-5 z-30 p-2 bg-normal rounded-full text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <aside
        className={`
          flex flex-col h-dvh bg-dark gap-5 p-6 text-white
          fixed top-0 left-0 z-20 w-[70%]
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:w-[15%]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end lg:hidden">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 mt-8 lg:mt-0">
          {componentsList.map((component) => (
            <Link
              href={`/components/${component.fileName}`}
              className="text-center text-lg p-2 rounded-lg hover:bg-normal transition-colors"
              key={component.name}
              onClick={handleLinkClick}
            >
              {component.name}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
