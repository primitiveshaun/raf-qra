"use client";
import { AnimatePresence, motion } from "framer-motion";

import Step1 from "../qra-step1";
import Step2 from "../qra-step2";
import Step3 from "../qra-step3";
import Step4 from "../qra-step3";

// Define Props Interface
interface QraStepperProps {
    currentStep: number;
    onAdvance: () => void;
}

export default function QraStepper({ currentStep, onAdvance }: QraStepperProps) {

const steps = [
    // Pass the onAdvance function to Step1
    <Step1 key={0} onAdvance={onAdvance} />, 
    <Step2 key={1} onAdvance={onAdvance} />, // It's good practice to pass it to all steps
    <Step3 key={2} onAdvance={onAdvance} />,
    <Step4 key={3} onAdvance={onAdvance} />,
  ];

  return (
    <div className="relative h-full p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
