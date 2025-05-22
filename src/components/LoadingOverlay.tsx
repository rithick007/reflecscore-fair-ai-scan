
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isLoading, 
  message = "Analyzing your resume..." 
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-transparent" />
              <svg 
                className="animate-spinner absolute inset-0 w-full h-full" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-electricBlue"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  cx="50"
                  cy="50"
                  r="40"
                  strokeLinecap="round"
                  strokeDasharray="62.83 188.5"
                />
              </svg>
              <svg 
                className="animate-spinner absolute inset-0 w-full h-full animation-delay-300" 
                style={{ animationDelay: '0.3s' }}
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-teal"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  cx="50"
                  cy="50"
                  r="30"
                  strokeLinecap="round"
                  strokeDasharray="47.12 141.37"
                />
              </svg>
            </div>
            <p className="text-white text-lg font-medium">{message}</p>
            <div className="flex space-x-1 mt-3">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: [0.2, 1, 0.2]
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
