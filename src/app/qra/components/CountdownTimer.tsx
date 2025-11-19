"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedNumber from '@/components/ui/AnimatedNumber'; 

interface CountdownTimerProps {
  seconds: number;
}

const formatTime = (totalSeconds: number): string[] => {
  // Ensure the time doesn't go negative for display purposes
  const time = Math.max(0, totalSeconds); 
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  // Returns array of 4 digits: ['M1', 'M2', 'S1', 'S2']
  return [...paddedMinutes.split(''), ...paddedSeconds.split('')];
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ seconds: initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    // Use window.setInterval to ensure it's running in the browser environment
    const intervalId = window.setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [timeLeft]); 

  // Destructure the 4 digits
  const [m1, m2, s1, s2] = formatTime(timeLeft);
  const isTimeUp = timeLeft === 0;

  return (
    <div className="flex items-center justify-center bg-gray-light border-2 border-dark rounded-lg px-5 py-3 shadow-2xl relative">
      
      <div className="flex font-mono text-dark font-semibold text-4xl">
        
        {/* Minutes */}
        <AnimatedNumber value={m1} />
        <AnimatedNumber value={m2} />

        {/* Separator */}
        <span className="text-dark flex items-center h-full">:</span>

        {/* Seconds */}
        <AnimatedNumber value={s1} />
        <AnimatedNumber value={s2} />
      </div>
      
      {/* Time's Up Message */}
      {isTimeUp && (
          <motion.p 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
              className="absolute font-mono text-red font-bold text-4xl"
          >
              00:00
          </motion.p>
      )}
    </div>
  );
};

export default CountdownTimer;