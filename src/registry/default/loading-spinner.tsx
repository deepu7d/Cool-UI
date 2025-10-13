"use client";
import { motion } from "motion/react";

export interface LoaderProps {
  loading?: boolean;
  color?: string;
  speedMultiplier?: number;
  height?: number;
  width?: number;
  radius?: number;
}
function MotionFadeLoader({
  loading = true,
  color = "#000000",
  speedMultiplier = 1, // changing this is causing issue
  height = 15,
  width = 5,
  radius = 16,
}: LoaderProps) {
  if (!loading) {
    return null;
  }

  const numBars = 8;
  const animationDuration = 1 / speedMultiplier;
  const staggerDelay = 0.12;
  const spinnerRadius = 20; // distance of each bar from the center

  return (
    <motion.div className="relative">
      {Array.from({ length: numBars }).map((_, i) => {
        const rotation = i * (360 / numBars);

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              // Center the bar initially before rotating
              top: `calc(50% - ${height / 2}px)`,
              left: `calc(50% - ${width / 2}px)`,
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: color,
              borderRadius: `${radius}px`,
              // This is the key: it sets the pivot point for the rotation.
              // We push the pivot point down, so the bar rotates around a central point.
              transformOrigin: `center ${spinnerRadius + height / 2}px`,
            }}
            initial={{
              rotate: rotation,
            }}
            animate={{
              opacity: [1, 0.3, 0, 1],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * staggerDelay,
            }}
          />
        );
      })}
    </motion.div>
  );
}

export default MotionFadeLoader;
