"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ArrowIcon from "@/components/ui/ArrowIcon"

// --- Step Component (Internal to ProgressBar) ---
interface StepProps {
  name: string;
  isActive: boolean;
  isLast: boolean;
}

const Step: React.FC<StepProps> = ({ name, isActive }) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <motion.span
        className={`
          font-myriad text-xl font-bold uppercase whitespace-nowrap
          ${isActive ? 'text-dark' : 'text-gray'}
        `}
        // Optional: Animate text color on active state change
        animate={{ color: isActive ? 'var(--color-dark)' : 'var(--color-gray)' }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.span>
      {isActive && (
        <motion.div
          layoutId="active-step-underline" // Framer Motion for smooth underline transition
          className="absolute bottom-[-5px] h-1 bg-red w-full rounded-full"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

// --- Arrow Separator Component ---
// const Arrow: React.FC = () => (
//   <motion.svg
//     className="mx-4 text-gray-dark" // Use a dark gray color for arrows
//     width="16" // Adjust size as needed
//     height="16"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     // Optional: Add a subtle animation to arrows
//     initial={{ x: -5 }}
//     animate={{ x: 0 }}
//     transition={{ delay: 0.1, duration: 0.2 }}
//   >
//     <path d="M5 12h14M12 5l7 7-7 7" />
//   </motion.svg>
// );


// --- Main StepProgressBar Component ---
interface StepProgressBarProps {
  steps: string[];
  currentStepIndex: number; // 0-indexed
  className?: string;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ 
  steps, 
  currentStepIndex, 
  className 
}) => {
  if (!steps || steps.length === 0) {
    return null; // Don't render if no steps
  }

  return (
    <div 
      className={`
        bg-white 
        text-dark
        rounded-2xl 
        p-6 
        flex items-center justify-between 
        space-x-4 
        w-fit 
        mx-auto 
        ${className}
      `}
    >
      {steps.map((stepName, index) => (
        <React.Fragment key={stepName}>
          <Step 
            name={stepName} 
            //isActive={index === currentStepIndex-1} 
            isActive={index === 0 && currentStepIndex >= 1 && currentStepIndex <= 3} // TODO: Adjust logic as needed
            isLast={index === steps.length - 1} 
          />
          {index < steps.length - 1 && <ArrowIcon width = '20' height = '10' />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepProgressBar;