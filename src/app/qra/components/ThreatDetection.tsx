"use client";

import { motion } from "framer-motion";

interface ThreatDetectionProps {
  children?: React.ReactNode;
  duration?: number;
  delay?: number;
}

export default function ThreatDetection({
  children,
  duration = 1,
  delay = 0,
}: ThreatDetectionProps) {
  return (
    <motion.div
      initial={{
        position: "absolute",
        top: "50%",
        left: "100%",       // starts beyond right edge
        x: "-50%",          // pull element’s centre inward
        y: "-50%",
      }}
      animate={{
        top: "0%",
        left: "50%",
        x: "-50%",          // centre horizontally
        y: "0%",            // sit at top
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8,
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
