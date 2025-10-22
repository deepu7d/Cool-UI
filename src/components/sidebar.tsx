"use client";

import { useEffect, useState } from "react";
import { componentsList } from "@/lib/components";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useParams } from "next/navigation";

export default function SiderBar() {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveComponent((params.component as string) || null);
  }, [params]);

  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const handleLinkClick = (component: string) => {
    if (isOpen) {
      setIsOpen(false);
    }
    setActiveComponent(component);
  };
  console.log(activeComponent);

  return (
    <>
      <button
        className="bg-normal fixed top-20 right-5 z-9999 rounded-full p-2 text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <aside
        className={`bg fixed top-0 left-0 z-20 flex h-dvh w-[70%] transform flex-col gap-5 border-r-1 border-slate-800/50 bg-black p-6 text-white transition-transform duration-300 ease-in-out lg:relative lg:w-[15%] lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <nav className="mt-20 flex flex-col gap-4 lg:mt-0">
          {componentsList.map((component) => (
            <Link
              href={`/components/${component.fileName}`}
              className="text-md relative rounded-lg p-2 text-center transition-colors"
              key={component.name}
              onClick={() => handleLinkClick(component.fileName)}
            >
              <span
                className={`relative z-10 ${activeComponent === component.fileName ? "text-neutral-200" : "text-neutral-400"} hover:text-neutral-100`}
              >
                {component.name}
              </span>
              {activeComponent === component.fileName && (
                <motion.div
                  transition={{ type: "spring", duration: 0.5 }}
                  layoutId="active-component"
                  className="absolute inset-0 z-0 border-l-2 border-neutral-200"
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
