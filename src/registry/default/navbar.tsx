"use client";

import { useState } from "react";
import { motion } from "motion/react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  return (
    <nav
      className="bg-dark relative inline-flex items-center rounded-lg p-2"
      onMouseLeave={() => setHoveredTab(null)}
    >
      {navItems.map((item) => (
        <button
          key={item.name}
          onMouseEnter={() => setHoveredTab(item.name)}
          className={`relative rounded-md px-3 py-2 font-medium transition-colors duration-300`}
          onClick={() => setActiveTab(item.name)}
        >
          <span className="relative z-10 font-light md:text-2xl">
            {item.name}
          </span>

          {(hoveredTab === item.name || activeTab === item.name) && (
            <motion.div
              layoutId="active-pill"
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-light absolute inset-0 z-0 rounded-md"
            />
          )}
        </button>
      ))}
    </nav>
  );
}
