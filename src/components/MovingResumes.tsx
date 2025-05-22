
import React from 'react';
import { motion } from 'framer-motion';

const MovingResumes: React.FC = () => {
  // Generate random positions, sizes, and animation durations
  const resumes = Array.from({ length: 12 }, (_, i) => {
    const size = Math.floor(Math.random() * 40) + 60; // 60-100px
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = Math.random() * 60 + 80; // 80-140 seconds
    const delay = Math.random() * 5; // 0-5 seconds delay
    
    return { id: i, size, startX, startY, duration, delay };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {resumes.map((resume) => {
        const path = [
          { x: `${resume.startX}vw`, y: `${resume.startY}vh` },
          { x: `${(resume.startX + 30) % 100}vw`, y: `${(resume.startY + 40) % 100}vh` },
          { x: `${(resume.startX + 60) % 100}vw`, y: `${(resume.startY + 20) % 100}vh` },
          { x: `${resume.startX}vw`, y: `${resume.startY}vh` },
        ];

        return (
          <motion.div
            key={resume.id}
            className="absolute"
            style={{ 
              width: resume.size, 
              height: resume.size * 1.4,
              opacity: 0.08,
            }}
            initial={{ x: path[0].x, y: path[0].y, opacity: 0 }}
            animate={{ 
              x: [path[0].x, path[1].x, path[2].x, path[3].x],
              y: [path[0].y, path[1].y, path[2].y, path[3].y],
              opacity: [0, 0.08, 0.08, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: resume.duration,
              ease: "linear", 
              repeat: Infinity,
              delay: resume.delay
            }}
          >
            <svg 
              viewBox="0 0 24 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect width="24" height="32" rx="2" fill="currentColor" className="text-deepViolet" />
              <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
              <rect x="4" y="10" width="16" height="1" rx="0.5" fill="white" />
              <rect x="4" y="13" width="16" height="1" rx="0.5" fill="white" />
              <rect x="4" y="16" width="16" height="1" rx="0.5" fill="white" />
              <rect x="4" y="19" width="10" height="1" rx="0.5" fill="white" />
              <rect x="4" y="22" width="12" height="1" rx="0.5" fill="white" />
              <rect x="4" y="25" width="8" height="1" rx="0.5" fill="white" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MovingResumes;
