
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

interface EmailAutomationSectionProps {
  score: number;
  email: string;
}

const EmailAutomationSection: React.FC<EmailAutomationSectionProps> = ({ score, email }) => {
  const { toast } = useToast();
  const isShortlisted = score >= 70;

  useEffect(() => {
    // Only trigger the email notification if we have a valid email
    if (!email || !validateEmail(email)) return;
    
    // Simulate sending the email automatically
    const timer = setTimeout(() => {
      toast({
        title: isShortlisted ? "Email Sent Successfully" : "Notification Sent",
        description: isShortlisted ? 
          "Shortlist notification sent to the candidate" : 
          "Rejection notification sent to the candidate",
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [email, isShortlisted, toast]);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <Card className="border border-slate-200 shadow-md bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-800">
          Notification Status
        </CardTitle>
        <CardDescription>
          Automatic email notification status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex items-center p-4 rounded-md ${isShortlisted ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
        >
          {isShortlisted ? (
            <>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className={`font-medium text-green-600`}>
                  ✅ Candidate shortlisted – Email sent automatically.
                </p>
                {email && (
                  <p className="text-sm text-slate-500 mt-1">
                    Notification sent to: {email}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className={`font-medium text-red-600`}>
                  ❌ Candidate not shortlisted – Rejection email sent.
                </p>
                {email && (
                  <p className="text-sm text-slate-500 mt-1">
                    Notification sent to: {email}
                  </p>
                )}
              </div>
            </>
          )}
        </motion.div>
        <div className="flex items-center justify-center mt-4">
          <Send className="h-4 w-4 text-slate-400 mr-2" />
          <span className="text-sm text-slate-500">Email processed automatically</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailAutomationSection;
