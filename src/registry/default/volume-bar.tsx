"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  PanInfo,
} from "motion/react";
import { Volume, Volume1, Volume2, VolumeOff } from "lucide-react";

export default function VolumeBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const volume = useMotionValue(0);

  const smoothedVolume = useSpring(volume, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  });

  const height = useTransform(smoothedVolume, [0, 1], ["0%", "100%"]);
  const volumeOff = useTransform(smoothedVolume, [0, 0.04, 0.05], [1, 1, 0]);
  const volumeLow = useTransform(smoothedVolume, [0.05, 0.06, 0.2], [0, 1, 1]);
  const volumeMedium = useTransform(smoothedVolume, [0.3, 0.7], [0, 1]);
  const volumeHigh = useTransform(smoothedVolume, [0.7, 1], [0, 1]);

  const handlePan = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const newVolume = 1 - (info.point.y - rect.top) / rect.height;
    const clampedVolume = Math.max(0, Math.min(1, newVolume));

    volume.set(clampedVolume);
  };

  return (
    <motion.div
      ref={containerRef}
      onPan={handlePan}
      onPanStart={handlePan}
      onPanEnd={handlePan}
      className="bg-light relative flex h-52 w-20 cursor-grab items-end overflow-hidden rounded-full select-none active:cursor-grabbing"
      style={{ touchAction: "none" }}
    >
      <motion.div
        className="flex w-full items-center justify-center bg-slate-50"
        style={{ height }}
      ></motion.div>
      <div className="text-dark absolute bottom-4 grid w-full place-items-center">
        <motion.div style={{ opacity: volumeOff }} className="[grid-area:1/1]">
          <VolumeOff />
        </motion.div>
        <motion.div style={{ opacity: volumeLow }} className="[grid-area:1/1]">
          <Volume />
        </motion.div>
        <motion.div
          style={{ opacity: volumeMedium }}
          className="[grid-area:1/1]"
        >
          <Volume1 />
        </motion.div>
        <motion.div style={{ opacity: volumeHigh }} className="[grid-area:1/1]">
          <Volume2 />
        </motion.div>
      </div>
    </motion.div>
  );
}
