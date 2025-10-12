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

const BrightnessSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const brightness = useMotionValue(0);

  const smoothedBrightness = useSpring(brightness, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  });

  const height = useTransform(smoothedBrightness, [0, 1], ["0%", "100%"]);
  const volumeOff = useTransform(smoothedBrightness, [0, 0.05], [1, 0]);
  const volumeLow = useTransform(smoothedBrightness, [0, 0.2], [0, 1]);
  const volumeMedium = useTransform(smoothedBrightness, [0.3, 0.7], [0, 1]);
  const volumeHigh = useTransform(smoothedBrightness, [0.7, 1], [0, 1]);

  const handlePan = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const newBrightness = 1 - (info.point.y - rect.top) / rect.height;
    const clampedBrightness = Math.max(0, Math.min(1, newBrightness));

    brightness.set(clampedBrightness);
  };

  return (
    <motion.div
      ref={containerRef}
      onPan={handlePan}
      onPanStart={handlePan}
      onPanEnd={handlePan}
      className="relative flex items-end w-20 h-52 bg-light rounded-full cursor-grab active:cursor-grabbing overflow-hidden select-none"
      style={{ touchAction: "none" }}
    >
      <motion.div
        className="w-full bg-slate-50 flex justify-center items-center "
        style={{ height }}
      ></motion.div>
      <div className="grid absolute w-full bottom-4 place-items-center text-dark">
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
};

export default BrightnessSlider;
