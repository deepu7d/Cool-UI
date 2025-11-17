"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { componentsList } from "@/lib/components";

export default function SearchComponents() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Handle keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (fileName: string) => {
    setOpen(false);
    router.push(`/components/${fileName}`);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-neutral-400/50 bg-transparent px-6 py-2 transition-colors hover:bg-neutral-900/50 lg:flex"
      >
        <Search className="h-4 w-4" />
        <span className="hover:text-neutral-200">Search Components</span>
        <kbd className="pointer-events-none ml-2 hidden h-5 items-center gap-1 rounded border border-neutral-400/50 bg-neutral-900 px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="w-full max-w-2xl gap-0 border-neutral-800 bg-neutral-900/90 backdrop-blur-sm"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Search Components</DialogTitle>
            <DialogDescription>
              Search and navigate to any component
            </DialogDescription>
          </DialogHeader>
          <Command className="rounded-lg border-none bg-transparent">
            <div className="py-2">
              <CommandInput
                placeholder="Search components..."
                className="text-white"
              />
            </div>
            <CommandList className="min-h-[400px] overflow-y-auto">
              <CommandEmpty className="py-6 text-center text-sm text-neutral-400">
                No components found.
              </CommandEmpty>
              <CommandGroup heading="Components" className="px-2">
                {componentsList.map((component) => (
                  <CommandItem
                    key={component.fileName}
                    onSelect={() => handleSelect(component.fileName)}
                    className="group mb-1 cursor-pointer rounded-md px-4 py-3 text-sm text-neutral-200 aria-selected:bg-neutral-800/50 aria-selected:text-neutral-200 data-[selected=true]:bg-neutral-800/50 data-[selected=true]:text-neutral-200"
                  >
                    <ArrowRight className="mr-3 h-4 w-4 text-neutral-400" />
                    <span className="font-medium">{component.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
