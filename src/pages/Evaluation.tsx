
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
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useToast } from '@/hooks/use-toast';

const Evaluation: React.FC = () => {
  // Form state
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Processing state
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Mock result (in a real app, this would come from an API)
  const [result, setResult] = useState({ score: 0, biasFree: true });
  
  const { toast } = useToast();
  
  const validateForm = (): boolean => {
    if (!companyName.trim()) {
      toast({
        title: "Error",
        description: "Company name is required",
        variant: "destructive"
      });
      return false;
    }
    
    if (!jobDescription.trim()) {
      toast({
        title: "Error",
        description: "Job description is required",
        variant: "destructive" 
      });
      return false;
    }
    
    if (!validateEmail(candidateEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid candidate email",
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
  
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const handleClearForm = () => {
    setCompanyName('');
    setJobDescription('');
    setCandidateEmail('');
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
    <div className="min-h-screen flex flex-col bg-amber-50">
      <LoadingOverlay isLoading={isProcessing} />
      
      {/* Professional solid color background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-900 -z-10"></div>
      
      <header className="border-b border-amber-700 bg-amber-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:opacity-80 transition-colors">
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
            <Logo size="sm" className="text-white" />
            <h1 className="text-lg font-semibold tracking-wider text-white font-orbitron">EVALUATION</h1>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {!showResults ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-slate-800 font-orbitron">Candidate Evaluation</h2>
                  <button
                    type="button"
                    onClick={handleClearForm}
                    className="text-slate-500 hover:text-slate-700 transition-colors"
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
                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                      placeholder="e.g. Quantum Technologies Inc."
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="jobDescription" className="block text-sm font-medium text-slate-700 mb-1">
                      Job Description
                    </label>
                    <Textarea
                      id="jobDescription"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 resize-none"
                      placeholder="Enter the job description with key requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="candidateEmail" className="block text-sm font-medium text-slate-700 mb-1">
                      Candidate Email
                    </label>
                    <Input
                      id="candidateEmail"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                      placeholder="candidate@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                <h2 className="text-xl font-semibold mb-6 text-slate-800 font-orbitron">Resume Upload</h2>
                <FileUpload
                  id="resumeUpload"
                  accept=".pdf,.docx,.txt"
                  onFileChange={setResumeFile}
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-base rounded-md transition-colors shadow-sm"
                >
                  Submit & Evaluate
                </Button>
              </div>
            </motion.form>
          ) : (
            <ResultCard score={result.score} biasFree={result.biasFree} email={candidateEmail} />
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Evaluation;
