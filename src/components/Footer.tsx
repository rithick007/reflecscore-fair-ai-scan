
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="w-full py-6 mt-auto"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
        <a 
          href="#about"
          className="text-sm text-gray-600 hover:text-electricBlue transition-colors"
        >
          About
        </a>
        <a 
          href="#contact"
          className="text-sm text-gray-600 hover:text-electricBlue transition-colors"
        >
          Contact
        </a>
        <a 
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-electricBlue transition-colors"
        >
          GitHub
        </a>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ReflecScore
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
