
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const FairnessToggle: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center mb-4"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="flex items-center space-x-2">
        <Switch id="fairness-toggle" />
        <Label 
          htmlFor="fairness-toggle" 
          className="cursor-pointer font-tech tracking-wider text-sm"
        >
          SHOW FAIRNESS HEATMAP
        </Label>
      </div>
    </motion.div>
  );
};

export default FairnessToggle;
