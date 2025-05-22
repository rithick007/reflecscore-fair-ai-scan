
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, pulseAnimation } from '@/lib/animations';

const AIInsights: React.FC = () => {
  const [currentInsight, setCurrentInsight] = useState(0);
  
  const insights = [
    "Scanning for deeper traits...",
    "Analyzing for intent-driven matches...",
    "Evaluating soft skill indicators...",
    "Processing contextual relevance...",
    "Detecting potential growth patterns..."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="glass-card p-6 w-full"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <h3 className="text-xl font-semibold mb-6 text-center font-tech">AI INSIGHTS</h3>
      
      <div className="h-32 flex items-center justify-center">
        <motion.div
          key={currentInsight}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          variants={pulseAnimation}
          className="text-center text-gray-600 font-tech tracking-wider"
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div 
              className="w-3 h-3 rounded-full bg-deepViolet mr-2"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="font-semibold text-deepViolet">AI PROCESSING</span>
          </div>
          <p className="text-lg">{insights[currentInsight]}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIInsights;
