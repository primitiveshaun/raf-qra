"use client"; // Required because we use useState and Framer Motion hooks

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface StatusToggleIconProps {
  isActive: boolean;
  activeColor?: string; // Color for the pulsing elements when active
  size?: number;
  className?: string;
  onClick?: () => void;
}

// --- Constants ---
const DEFAULT_SIZE = 70;

const StatusToggleIcon: React.FC<StatusToggleIconProps> = ({ 
  isActive, 
  activeColor = "#00FF00", // Default to bright green for flashing
  size = DEFAULT_SIZE, 
  className = '',
  onClick,
}) => {
  
  // Define the Framer Motion animation for the pulsing effect
  const pulseVariants = {
    // Start state: Fully visible with the active color
    start: { opacity: 1, fill: activeColor }, 
    // End state: Dimmed opacity (and slightly different color if desired)
    end: { opacity: 0.3, fill: activeColor },
  };

  // The four path elements from the second SVG that represent the active visual
  const ActivePaths = (
    <>
      <path 
        d="M43.6562 10.0259C44.2313 10.6759 44.8542 12.5571 45 13.1821C45.1771 14.6405 45.425 17.2821 45 18.3071C44.4688 19.5884 43.8438 21.1196 43.2812 21.9009C42.7188 22.6821 42.1875 24.7446 44.1875 25.2134C46.1875 25.6821 46.9688 24.1196 47.7812 22.9946C49.8166 20.1764 49.8438 15.7759 49.4375 13.4634C49.0312 11.1509 47.875 6.74451 45.5312 5.83826C43.1875 4.93201 42.5938 7.11951 42.5938 7.68201C42.5938 8.24451 42.9375 9.21338 43.6562 10.0259Z" 
        fill="white" // Default fill, overwritten by motion prop
      />
      <path 
        d="M51.2813 6.99463C51.8563 7.99283 52.8436 9.15076 53.2811 12.6195C53.4686 17.9633 53.2686 18.746 52.8436 20.3201C52.3123 22.2877 51.5628 23.6386 51.0003 24.8383C50.4378 26.0381 47.4062 28.5883 49.9063 30.5883C51.5662 31.9161 54.3748 28.6597 55.1873 26.9321C57.2227 22.6042 58.2185 17.5459 57.8123 13.9946C57.406 10.4433 56.3753 3.74466 52.0314 0.557129C49.8337 -1.05546 48.4115 1.26007 48.5001 2.11934C48.7193 4.24404 50.5625 5.74689 51.2813 6.99463Z" 
        fill="white"
      />
      <path 
        d="M26.7139 20.873C26.1389 20.223 25.516 18.3418 25.3701 17.7168C25.193 16.2584 24.9451 13.6168 25.3701 12.5918C25.9014 11.3105 26.5264 9.7793 27.0889 8.99805C27.6514 8.2168 28.1826 6.1543 26.1826 5.68555C24.1826 5.2168 23.4014 6.7793 22.5889 7.9043C20.5535 10.7225 20.5264 15.123 20.9326 17.4355C21.3389 19.748 22.4951 24.1544 24.8389 25.0607C27.1826 25.9669 27.7764 23.7794 27.7764 23.2169C27.7764 22.6544 27.4326 21.6855 26.7139 20.873Z" 
        fill="white"
      />
      <path 
        d="M19.089 23.9043C18.514 22.9061 17.5267 21.7482 17.0891 18.2794C16.9016 12.9357 17.1017 12.1529 17.5267 10.5788C18.0579 8.61122 18.8074 7.26036 19.37 6.0606C19.9325 4.86085 22.9641 2.3106 20.4639 0.310604C18.8041 -1.0172 15.9955 2.23921 15.1829 3.96685C13.1476 8.29473 12.1517 13.3531 12.5579 16.9044C12.9642 20.4556 13.9949 27.1543 18.3389 30.3418C20.5365 31.9544 21.9587 29.6389 21.8701 28.7796C21.6509 26.6549 19.8077 25.152 19.089 23.9043Z" 
        fill="white"
      />
    </>
  );

  return (
    <motion.button
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      // Optional: Add a subtle press effect
      whileTap={{ scale: 0.95 }} 
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          // --- ACTIVE STATE: Show Second SVG with Pulsing Animation ---
          <motion.svg
            key="active"
            width={size}
            height={size}
            viewBox="0 0 70 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // Entry/Exit animation for the whole SVG
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background (The fill of the rectangle) */}
            <rect width="70" height="70" fill="url(#pattern0_792_5991)" fillOpacity="0.5" />
            
            {/* The Four Pulsing Paths */}
            <motion.g
                variants={pulseVariants}
                animate="end" // Start the pulsing loop from the 'end' state
                transition={{
                    // Loop continuously between start and end states
                    repeat: Infinity,
                    repeatType: "reverse", 
                    duration: 1.5, // 1.5 seconds per half-cycle
                    ease: "easeInOut",
                }}
            >
              {ActivePaths}
            </motion.g>

            {/* Definitions (Image pattern from the original SVG) */}
            <defs>
              {/* NOTE: You should replace the placeholder image ID/data URL 
                 with the actual definition or use a standard SVG if possible. 
                 Using <pattern> with base64 images is complex in React. */}
              <pattern id="pattern0_792_5991" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_792_5991" transform="scale(0.00195312)"/>
              </pattern>
              <image id="image0_792_5991" width="512" height="512" preserveAspectRatio="none" 
                     xlinkHref="data:image/png;base64,iVBORw0KGgoAAA..." /> 
            </defs>
          </motion.svg>

        ) : (
          // --- INACTIVE STATE: Show First SVG ---
          <motion.svg
            key="inactive"
            width={size}
            height={size}
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            // Entry/Exit animation
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background (The fill of the rectangle) */}
            <rect width="70" height="70" fill="url(#pattern0_792_5987)" fillOpacity="0.3"/>
            
            {/* Definitions (Image pattern from the original SVG) */}
            <defs>
              {/* Same note applies here: base64 patterns in React SVGs can be tricky */}
              <pattern id="pattern0_792_5987" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_792_5987" transform="scale(0.00195312)"/>
              </pattern>
              <image id="image0_792_5987" width="512" height="512" preserveAspectRatio="none" 
                     xlinkHref="data:image/png;base64,iVBORw0KGgoAAA..." />
            </defs>
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default StatusToggleIcon;