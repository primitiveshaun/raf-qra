"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonDangerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  initialState?: boolean; // To control its initial state if needed
}

const ButtonDanger: React.FC<ButtonDangerProps> = ({ 
  children, 
  onClick, 
  className,
  initialState = false,
}) => {
  const [isActive, setIsActive] = useState(initialState);

  // Framer Motion variants for the background color and glow
  const buttonVariants = {
    // Red state (darker red, no glow)
    red: { 
      backgroundColor: 'var(--color-red)',
      boxShadow: '0 0px 0px 0px rgba(var(--color-red-light-rgb), 0)' // No glow
    },
    // Light red state (lighter red, soft glow)
    lightRed: { 
      backgroundColor: 'var(--color-red-light)',
      // Note: Tailwind uses rgba for box-shadow. Convert your hex to RGB for the glow color.
      // Assuming you have --color-red-light-rgb defined in your global CSS as 'R G B' values
      boxShadow: '0 0px 5px 5px rgba(var(--color-red-light-rgb), 0.9)' // Soft glow
    },
  };

  // Helper to get RGB from your theme (assuming your theme provides hex, we need RGB for rgba)
  // For the --color-red-light: #FA0C3A;, the RGB value is 250 12 58.
  // We'll define a CSS variable for this in your globals.css to make it work seamlessly.

  return (
    <motion.button
      className={`
        relative 
        text-white font-bold tracking-wide
        py-3 px-8 
        rounded-lg 
        shadow-xl 
        text-xl 
        cursor-pointer 
        focus:outline-none focus:ring-4 focus:ring-red-light focus:ring-opacity-50 
        ${className}
      `}
      // Set initial background to red
      initial="red" 
      // Animate continuously between red and lightRed states
      animate="lightRed" // Start with lightRed to trigger the glow immediately
      variants={buttonVariants}
      transition={{
        // Define the looping animation
        duration: .5, // Duration of one cycle (red -> lightRed)
        repeat: Infinity,
        repeatType: "reverse", // Makes it transition back and forth smoothly
        ease: "easeOut",
      }}
      onClick={onClick}
      // Optional: Add a subtle press effect
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonDanger;