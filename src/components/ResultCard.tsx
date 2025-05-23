
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import FairnessToggle from '@/components/FairnessToggle';
import ExplainabilitySection from '@/components/ExplainabilitySection';
import EmailAutomationSection from '@/components/EmailAutomationSection';

interface ResultCardProps {
  score: number;
  biasFree: boolean;
  email: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  score, 
  biasFree,
  email
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  
  useEffect(() => {
    // Animate the score from 0 to the actual score
    const duration = 1500;
    const startTime = performance.now();
    
    const animateScore = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentScore = Math.floor(progress * score);
      
      setAnimatedScore(currentScore);
      
      if (progress < 1) {
        requestAnimationFrame(animateScore);
      }
    };
    
    requestAnimationFrame(animateScore);
    
    // Set the stroke-dasharray for the SVG circle
    if (circleRef.current) {
      const circumference = 2 * Math.PI * 40;
      const strokeDashArray = (score / 100) * circumference;
      circleRef.current.style.setProperty('--score', String(strokeDashArray));
    }
  }, [score]);
  
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 70) return 'text-blue-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  const getBiasStatusStyles = () => {
    return biasFree
      ? 'bg-green-50 text-green-600 border-green-200'
      : 'bg-blue-50 text-blue-600 border-blue-200';
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <FairnessToggle />
      
      <motion.div
        className="bg-white rounded-lg shadow-md p-6 border border-slate-200 w-full max-w-md mx-auto mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-6 text-center text-slate-800 font-orbitron">RESULTS</h3>
        
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-40 h-40 mb-4">
            {/* Background circle */}
            <svg 
              className="w-full h-full" 
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#E2E8F0"
                strokeWidth="8"
              />
              {/* Score circle */}
              <circle
                ref={circleRef}
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="0 251.2" // 2 * PI * r = circumference
                strokeDashoffset="62.8" // 0.25 * circumference (to start from top)
                className="animate-score-gauge"
                transform="rotate(-90, 50, 50)"
                style={{
                  filter: score >= 70 ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' : 'none'
                }}
              />
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span 
                className={cn("text-4xl font-bold", getScoreColor())}
                style={{
                  textShadow: score >= 70 ? '0 0 15px rgba(59, 130, 246, 0.6)' : 'none'
                }}
              >
                {animatedScore}
              </span>
              <span className="text-sm text-slate-500">OUT OF 100</span>
            </div>
          </div>
          
          <h4 className="text-lg font-medium mb-2 text-slate-800 font-orbitron">FIT SCORE</h4>
          <p className="text-sm text-slate-500 text-center mb-6">
            THIS RESUME FITS {score}% OF THE JOB REQUIREMENTS
          </p>
          
          <div className={cn("flex items-center px-4 py-2 rounded-md border", getBiasStatusStyles())}>
            {biasFree ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="text-sm font-medium">
              {biasFree ? "NO BIAS DETECTED" : "BIAS MITIGATED"}
            </span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors" 
          onClick={() => window.print()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clipRule="evenodd"
            />
          </svg>
          DOWNLOAD PDF REPORT
        </Button>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ExplainabilitySection />
        <EmailAutomationSection score={score} email={email} />
      </div>
    </motion.div>
  );
};

export default ResultCard;
