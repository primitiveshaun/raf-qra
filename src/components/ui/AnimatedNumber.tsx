import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedNumberProps {
  value: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  return (
    <div className="relative w-6 h-10 flex justify-center overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={value} // Key needed for triggering exit/enter animation
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedNumber;