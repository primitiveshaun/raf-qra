"use client";

import { motion, Variants } from "framer-motion";
import ButtonDanger from "@/components/ui/ButtonDanger";

import CountdownTimer from "./components/CountdownTimer";

interface Step2Props {
  onAdvance: () => void; // A function to advance the step
}

// Define the container variants for staggering the children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Start the next child animation 0.1s after the previous one
      delayChildren: 0.5, // Wait 0.1s before starting the first child
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Animate elements out in reverse order
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export default function Step2({ onAdvance }: Step2Props) {
  const handleClick = () => {
    // console.log("Button clicked! Advancing step...");
    onAdvance(); // <-- This executes goToNextStep() in the HOC
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden" // Set initial state
      animate="visible" // Animate to visible state on mount
      exit="exit" // Animate to exit state before unmount (handled by QraStepper's AnimatePresence)
    >
      {/* Timer and Signal Tower */}
      <motion.div variants={itemVariants} className="flex m-6">
        <CountdownTimer seconds={10} />
      </motion.div>

      {/* Step Text */}
      <motion.div variants={itemVariants} className="mt-10 mb-12">
        <h1 className="text-white text-h3 tracking-wider uppercase font-bold mb-2">
          CO-ORDINATE RESPONSE
        </h1>
        <p className="text-white text-h4">
          <strong>RAF Boulmer</strong> identifies the rogue aircraft.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div variants={itemVariants} className="mx-5 my-10">
        <ButtonDanger onClick={handleClick}>CO-ORDINATE RESPONSE</ButtonDanger>
      </motion.div>
    </motion.section>
  );
}
