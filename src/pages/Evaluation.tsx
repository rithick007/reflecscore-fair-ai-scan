
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import FileUpload from '@/components/FileUpload';
import LoadingOverlay from '@/components/LoadingOverlay';
import ResultCard from '@/components/ResultCard';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { pageTransition, fadeInUp, staggerContainer, glowingBorder } from '@/lib/animations';
import { useToast } from '@/hooks/use-toast';

const Evaluation: React.FC = () => {
  // Form state
  const [jobTitle, setJobTitle] = useState('');
  const [jobRequirements, setJobRequirements] = useState('');
  const [jobDescriptionFile, setJobDescriptionFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Processing state
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Mock result (in a real app, this would come from an API)
  const [result, setResult] = useState({ score: 78, biasFree: true });
  
  const { toast } = useToast();
  
  const validateForm = (): boolean => {
    if (!jobTitle.trim()) {
      toast({
        title: "Error",
        description: "Job title is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!jobRequirements.trim()) {
      toast({
        title: "Error",
        description: "Key skills & requirements are required",
        variant: "destructive" 
      });
      return false;
    }
    
    if (!resumeFile) {
      toast({
        title: "Error",
        description: "Please upload a resume file",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleClearForm = () => {
    setJobTitle('');
    setJobRequirements('');
    setJobDescriptionFile(null);
    setResumeFile(null);
    setShowResults(false);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Start processing
    setIsProcessing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // In a real app, this would be an actual API call to analyze the resume
      // For now, we'll just show a mock result
      const randomScore = Math.floor(Math.random() * 40) + 60; // Random score between 60-99
      const randomBias = Math.random() > 0.7; // 30% chance of bias detection
      
      setResult({
        score: randomScore,
        biasFree: !randomBias
      });
      
      setIsProcessing(false);
      setShowResults(true);
      
      toast({
        title: "ANALYSIS COMPLETE",
        description: "Resume has been successfully analyzed",
      });
    }, 2500);
  };
  
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <LoadingOverlay isLoading={isProcessing} />
      
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Logo size="sm" />
            <h1 className="text-lg font-semibold tracking-wider font-tech">REFLECSCORE EVALUATION</h1>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
        >
          {!showResults ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              variants={fadeInUp}
            >
              <motion.div 
                className="glass-card p-6"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold font-tech tracking-wider">COMPANY REQUIREMENTS</h2>
                  <button
                    type="button"
                    onClick={handleClearForm}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Clear form"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v1h10V3a1 1 0 112 0v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14a1 1 0 01-1 1H6a1 1 0 01-1-1V7h10v9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1 font-tech tracking-wide">
                      JOB TITLE
                    </label>
                    <motion.div whileHover="hover" initial="initial" variants={glowingBorder}>
                      <Input
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="neumorphic font-tech"
                        placeholder="e.g. Senior Software Engineer"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="jobRequirements" className="block text-sm font-medium text-gray-700 mb-1 font-tech tracking-wide">
                      KEY SKILLS & REQUIREMENTS
                    </label>
                    <motion.div whileHover="hover" initial="initial" variants={glowingBorder}>
                      <Textarea
                        id="jobRequirements"
                        value={jobRequirements}
                        onChange={(e) => setJobRequirements(e.target.value)}
                        className="neumorphic resize-none font-tech"
                        placeholder="e.g. 5+ years React experience, TypeScript knowledge, team leadership..."
                        rows={5}
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 font-tech tracking-wide">
                      JOB DESCRIPTION UPLOAD (OPTIONAL)
                    </label>
                    <FileUpload
                      id="jobDescriptionUpload"
                      accept=".pdf,.docx,.txt"
                      onFileChange={setJobDescriptionFile}
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card p-6"
                variants={fadeInUp}
              >
                <h2 className="text-xl font-semibold mb-6 font-tech tracking-wider">RESUME UPLOAD</h2>
                <FileUpload
                  id="resumeUpload"
                  accept=".pdf,.docx,.txt"
                  onFileChange={setResumeFile}
                />
              </motion.div>
              
              <motion.div 
                className="flex justify-center"
                variants={fadeInUp}
              >
                <Button
                  type="submit"
                  className="primary-gradient py-6 px-8 text-lg rounded-xl hover:opacity-90 transition-opacity font-tech tracking-wider"
                >
                  SUBMIT & EVALUATE
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <ResultCard score={result.score} biasFree={result.biasFree} />
          )}
        </motion.div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Evaluation;
