"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CopyCommandProps {
  baseCommand: string;
}

type PackageManager = "pnpm" | "npm";

const commandPrefixes: Record<PackageManager, string> = {
  pnpm: "pnpm dlx",
  npm: "npx",
};

export default function CopyCommand({ baseCommand }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);
  const [selectedPM, setSelectedPM] = useState<PackageManager>("pnpm");

  const fullCommand = baseCommand.replace(/^npx/, commandPrefixes[selectedPM]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full rounded-lg bg-neutral-900/50">
      <div className="mb-2 flex justify-between border-b border-neutral-500/50 px-6 py-3">
        <div className="flex gap-6">
          {(["pnpm", "npm"] as PackageManager[]).map((pm) => (
            <button
              key={pm}
              onClick={() => setSelectedPM(pm)}
              className={`text-md font-medium transition-colors ${
                selectedPM === pm
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-300"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="transition-colors hover:text-neutral-300"
          aria-label="Copy command"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="px-6 py-3">
        <code className="text-md">{fullCommand}</code>
      </div>
    </div>
  );
}
