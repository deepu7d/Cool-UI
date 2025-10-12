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

export default function FramerMotionNav() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  return (
    <nav className="relative inline-flex items-center bg-dark p-2 rounded-lg">
      {navItems.map((item) => (
        <button
          key={item.name}
          onMouseEnter={() => setHoveredTab(item.name)}
          className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300`}
        >
          <span className="relative z-10">{item.name}</span>

          {hoveredTab === item.name && (
            <motion.div
              layoutId="active-pill"
              transition={{ type: "spring", duration: 0.3 }}
              className="absolute inset-0 bg-light rounded-md z-0"
            />
          )}
        </button>
      ))}
    </nav>
  );
}
