
import React from 'react';
import { motion } from 'framer-motion';
import { starAnimation } from '@/lib/animations';

const StarryBackground: React.FC = () => {
  // Generate random stars
  const stars = Array.from({ length: 30 }, (_, i) => {
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    
    return { id: i, size, x, y, delay };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          variants={starAnimation}
          initial="initial"
          animate="animate"
          custom={star.delay}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
