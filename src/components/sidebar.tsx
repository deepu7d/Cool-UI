"use client";

import { useState } from "react";
import { componentsList } from "@/lib/components";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export default function SiderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleLinkClick = (component: string) => {
    if (isOpen) {
      setIsOpen(false);
    }
    setActiveComponent(component);
  };

  return (
    <>
      <button
        className="bg-normal fixed top-5 left-5 z-30 rounded-full p-2 text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <aside
        className={`bg-dark fixed top-0 left-0 z-20 flex h-dvh w-[70%] transform flex-col gap-5 p-6 text-white transition-transform duration-300 ease-in-out lg:relative lg:w-[15%] lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="flex justify-end lg:hidden">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-4 lg:mt-0">
          {componentsList.map((component) => (
            <Link
              href={`/components/${component.fileName}`}
              className="relative rounded-lg p-2 text-center text-lg transition-colors hover:scale-105"
              key={component.name}
              onClick={() => handleLinkClick(component.name)}
            >
              <span
                className={`relative z-10 ${activeComponent === component.name ? "font-medium" : "text-neutral-100"}`}
              >
                {component.name}
              </span>
              {activeComponent === component.name && (
                <motion.div
                  transition={{ type: "spring", duration: 0.5 }}
                  layoutId="active-component"
                  className="bg-normal absolute inset-0 z-0 rounded-md"
                ></motion.div>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
