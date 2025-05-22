
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ResumeVisual from '@/components/ResumeVisual';
import { pageTransition, staggerContainer, fadeInUp } from '@/lib/animations';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/evaluation');
  };
  
  return (
    <motion.div 
      className="min-h-screen flex flex-col relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] -z-10"></div>
      
      <main className="flex-1 flex items-center justify-center">
        <motion.div 
          className="container max-w-6xl px-6 py-16"
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="flex flex-col items-start text-left mb-12 md:mb-0 md:w-1/2"
              variants={fadeInUp}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Logo size="lg" className="mb-8" />
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-orbitron uppercase tracking-widest text-[#1E1B4B] drop-shadow-sm"
                variants={fadeInUp}
              >
                ReflecScore
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-[#374151] max-w-md mb-10 font-exo tracking-wide drop-shadow-sm"
                variants={fadeInUp}
              >
                AI. Fairness. One Resume at a Time.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  className="bg-gradient-to-r from-[#1E1B4B] to-[#374151] text-white text-lg py-6 px-10 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 font-orbitron tracking-wider"
                  onClick={handleGetStarted}
                >
                  START EVALUATION
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>

            {/* Resume visual with graphs on the right side */}
            <motion.div
              className="md:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <ResumeVisual />
            </motion.div>
          </div>
          
          {/* Glass card with features using blur */}
          <motion.div 
            className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl mx-auto max-w-4xl shadow-lg border border-white/20 mt-12"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-[#1E1B4B]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#1E1B4B]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-orbitron text-[#1E1B4B]">QUANTUM ANALYSIS</h3>
                <p className="text-sm text-[#374151] font-exo">Neural-assisted processing in milliseconds with advanced pattern recognition</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-[#1E1B4B]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#1E1B4B]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-orbitron text-[#1E1B4B]">NEURAL FAIRNESS</h3>
                <p className="text-sm text-[#374151] font-exo">Multi-layered AI bias mitigation with cognitive algorithmic balancing</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-[#1E1B4B]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#1E1B4B]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389 21.034 21.034 0 01-.554-.6 19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-orbitron text-[#1E1B4B]">DATA PRECISION</h3>
                <p className="text-sm text-[#374151] font-exo">High-definition visualization metrics with hyper-granular qualification mapping</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      
      {/* SVG wave divider */}
      <div className="w-full overflow-hidden leading-0 transform relative z-10">
        <svg className="relative block w-full h-24 md:h-32" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 140">
          <path 
            fill="#D97706" 
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,101.3C672,85,768,75,864,80C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Home;
