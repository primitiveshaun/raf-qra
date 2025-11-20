"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import React from "react"; // Ensure React is imported if not already

interface CountdownTimerProps {
  seconds: number;
}

const formatTime = (totalSeconds: number): string[] => {
  const time = Math.max(0, totalSeconds);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return [...paddedMinutes.split(""), ...paddedSeconds.split("")];
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  seconds: initialSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = window.setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const [m1, m2, s1, s2] = formatTime(timeLeft);
  const isTimeUp = timeLeft === 0;

  // --- Framer Motion Blink Variants ---
  const blinkVariants = {
    // Default state: dark text color
    normal: { color: "var(--color-dark)" },
    // Blink state: red text color
    blink: { color: "var(--color-red)" },
  };
  // NOTE: I am using CSS variables (`--color-dark`, `--color-red`) here for best practice.
  // If you only use Tailwind classes, you can use hex codes or standard Tailwind colors
  // (e.g., 'rgb(220 38 38)' for 'red-600') inside the motion styles.

  // Define the base color class (dark) or blinking class (red)
  const timerTextColor = isTimeUp ? "" : "text-dark";

  // Set the correct font size for the separator
  const separatorClassName = isTimeUp
    ? "text-red flex items-center h-full mx-1" // Red and centered when blinking
    : "text-dark flex items-center h-full mx-1"; // Dark and centered when counting

  return (
    <div className="flex items-center justify-center bg-gray-light border-2 border-dark rounded-lg px-5 py-3 shadow-2xl relative">
      <motion.div
        className={`flex font-mono font-semibold text-4xl ${timerTextColor}`}
        // The default state for the timer display is 'normal'
        initial="normal"
        // If time is up, apply the blinking animation
        animate={isTimeUp ? "blink" : "normal"}
        variants={blinkVariants}
        transition={
          isTimeUp
            ? {
                // Blinking animation: Repeat forever, reversing the color change
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5, // Total cycle is 1 second (0.5s to red, 0.5s back)
                ease: "easeInOut",
              }
            : {}
        }
      >
        {/* Minutes */}
        <AnimatedNumber value={m1} />
        <AnimatedNumber value={m2} />

        <span className={separatorClassName}>:</span>

        {/* Seconds */}
        <AnimatedNumber value={s1} />
        <AnimatedNumber value={s2} />
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
