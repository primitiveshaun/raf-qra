"use client";
import { motion } from "framer-motion";

interface MapMarkerProps {
  top: string;
  right: string;
  onClick?: () => void;
  pulsing?: boolean;
}

export default function MapMarker({ top, right, onClick, pulsing = false }: MapMarkerProps) {
  return (
    <motion.div
      style={{ top, right }}
      onClick={onClick}
      className="absolute w-8 h-8 -ml-4 -mt-4 cursor-pointer group"
      whileHover={{ scale: 1.33 }}
      animate={
        pulsing
          ? {
              scale: [1, 1.15, 1],
            }
          : {}
      }
      transition={{
        duration: pulsing ? 1.4 : 0.5,
        repeat: pulsing ? Infinity : 0,
        type: pulsing ?  "tween" : "spring",
        stiffness: 250
      }}
      aria-label="Location Marker"
    >
      {/* Outer Ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 opacity-60 ${
          pulsing ? "border-red-600" : "border-gray-400"
        }`}
      />

      {/* Inner Circle */}
      <div
        className={`absolute inset-1 rounded-full border-2 flex items-center justify-center ${
          pulsing ? "border-red-600" : "border-white"
        }`}
      >
        {/* Red Dot */}
        <div className="w-3 h-3 bg-red rounded-full shadow-[0_0_8px_#c8102e]" />
      </div>
    </motion.div>
  );
}
