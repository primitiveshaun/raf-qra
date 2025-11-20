"use client";
import { motion } from "framer-motion";

interface MapMarkerProps {
  top: string;
  right: string;
  onClick?: () => void;
}

export default function MapMarker({ top, right, onClick }: MapMarkerProps) {
  return (
    <motion.div
      style={{ top, right }}
      onClick={onClick}
      className="absolute w-8 h-8 -ml-4 -mt-4 cursor-pointer group"
      whileHover={{ scale: 1.33 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 250 }}
      aria-label="Location Marker"
    >
      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-gray-400 opacity-60" />

      {/* Inner Circle */}
      <div className="absolute inset-1 rounded-full border-2 border-white flex items-center justify-center">
        {/* Red Dot */}
        <div className="w-3 h-3 bg-red rounded-full shadow-[0_0_8px_#c8102e]" />
      </div>
    </motion.div>
  );
}
