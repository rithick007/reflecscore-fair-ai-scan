
import React from 'react';
import { motion } from 'framer-motion';

const NetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/5 via-deepViolet/5 to-teal/5" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Network Nodes and Lines */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          
          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={i % 3 === 0 ? "rgba(59, 130, 246, 0.2)" : 
                     i % 3 === 1 ? "rgba(6, 182, 212, 0.2)" : 
                     "rgba(139, 92, 246, 0.2)"}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.5,
                transition: { 
                  delay: i * 0.1,
                  duration: 1.5,
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}
        
        {Array.from({ length: 30 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 6 + 2;
          
          return (
            <motion.circle
              key={`node-${i}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r={size}
              fill={i % 3 === 0 ? "rgba(59, 130, 246, 0.2)" : 
                   i % 3 === 1 ? "rgba(6, 182, 212, 0.2)" : 
                   "rgba(139, 92, 246, 0.2)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 0.7,
                transition: { 
                  delay: i * 0.07,
                  duration: 0.8,
                  ease: "easeOut"
                }
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default NetworkBackground;
