
import React from 'react';
import { motion } from 'framer-motion';

const ResumeVisual: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full max-w-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Resume paper background */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-white/40">
        {/* Resume header */}
        <div className="mb-4 border-b border-gray-300 pb-2">
          <div className="w-1/2 h-5 bg-[#1E1B4B]/20 rounded mb-2"></div>
          <div className="w-3/4 h-3 bg-[#1E1B4B]/10 rounded"></div>
        </div>
        
        {/* Resume content with graphs */}
        <div className="space-y-3">
          {/* Skills section */}
          <div className="mb-4">
            <div className="w-1/3 h-4 bg-[#1E1B4B]/20 mb-2 rounded"></div>
            <div className="flex items-center space-x-2">
              <div className="w-1/4 h-3 bg-[#1E1B4B]/10 rounded"></div>
              <div className="flex-1 h-3 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded"></div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-1/3 h-3 bg-[#1E1B4B]/10 rounded"></div>
              <div className="flex-1 h-3 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] w-3/4 rounded"></div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-1/5 h-3 bg-[#1E1B4B]/10 rounded"></div>
              <div className="flex-1 h-3 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] w-2/3 rounded"></div>
            </div>
          </div>
          
          {/* Graph section */}
          <div className="border-t border-gray-200 pt-4 pb-2">
            <div className="w-1/4 h-4 bg-[#1E1B4B]/20 mb-4 rounded"></div>
            
            {/* Bar graph */}
            <div className="flex items-end h-28 space-x-2 mb-2">
              <div className="w-1/6 bg-[#1E1B4B]/70 rounded-t h-12"></div>
              <div className="w-1/6 bg-[#374151]/70 rounded-t h-20"></div>
              <div className="w-1/6 bg-[#1E1B4B]/70 rounded-t h-16"></div>
              <div className="w-1/6 bg-[#374151]/70 rounded-t h-24"></div>
              <div className="w-1/6 bg-[#1E1B4B]/70 rounded-t h-14"></div>
              <div className="w-1/6 bg-[#374151]/70 rounded-t h-22"></div>
            </div>
            
            {/* Graph labels */}
            <div className="flex justify-between">
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
              <div className="w-1/6 h-2 bg-[#1E1B4B]/10 rounded"></div>
            </div>
          </div>
          
          {/* Pie chart */}
          <div className="flex justify-center my-4">
            <svg height="80" width="80" className="transform rotate-[-90deg]">
              <circle cx="40" cy="40" r="36" fill="transparent" stroke="#E5E7EB" strokeWidth="8" />
              <circle 
                cx="40" 
                cy="40" 
                r="36" 
                fill="transparent" 
                stroke="#1E1B4B" 
                strokeWidth="8" 
                strokeDasharray={`${75 * 2.26} ${100 * 2.26}`}
                className="animate-score-gauge"
              />
              <text 
                x="40" 
                y="40" 
                className="transform rotate-90 text-[#1E1B4B] text-xs font-semibold" 
                textAnchor="middle" 
                dominantBaseline="middle"
                stroke="none"
                fill="#1E1B4B"
              >
                75%
              </text>
            </svg>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-4">
          <div className="w-full h-1 bg-[#1E1B4B]/5 my-2 rounded"></div>
          <div className="w-2/3 h-2 bg-[#1E1B4B]/10 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-[#1E1B4B]/10 rounded"></div>
        </div>

        {/* Dynamic floating animation */}
        <motion.div 
          className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#1E1B4B] to-[#374151] rounded-full flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, -5, 0],
            boxShadow: [
              '0 4px 6px rgba(30, 27, 75, 0.1)',
              '0 8px 12px rgba(30, 27, 75, 0.2)',
              '0 4px 6px rgba(30, 27, 75, 0.1)',
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }}
        >
          <span className="text-white font-bold text-sm">AI</span>
        </motion.div>
      </div>

      {/* Decorative floating element */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-20 h-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-md flex items-center justify-center"
        animate={{ 
          y: [0, 5, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
      >
        <div className="flex space-x-1">
          <div className="w-2 h-6 bg-[#FBBF24] rounded-full"></div>
          <div className="w-2 h-8 bg-[#1E1B4B] rounded-full"></div>
          <div className="w-2 h-4 bg-[#FBBF24] rounded-full"></div>
          <div className="w-2 h-6 bg-[#1E1B4B] rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeVisual;
