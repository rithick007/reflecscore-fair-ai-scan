
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PaperPlane, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailAutomationSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendEmail = (type: 'shortlist' | 'reject') => {
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      toast({
        title: "Email Sent Successfully",
        description: type === 'shortlist' ? 
          "Shortlist notification sent to the candidate" : 
          "Rejection notification sent to the candidate",
      });
      setEmail('');
    }, 1500);
  };

  return (
    <Card className="border border-slate-200 shadow-md bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-slate-800">
          Send Result to Candidate
        </CardTitle>
        <CardDescription>
          Notify the candidate about their application status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="candidateEmail" className="text-sm font-medium text-slate-700">
            Candidate Email
          </label>
          <Input
            id="candidateEmail"
            placeholder="Enter candidate email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-white border-slate-300"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <Button
            onClick={() => handleSendEmail('shortlist')}
            disabled={isSending}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Send Shortlist Email
          </Button>
          <Button
            onClick={() => handleSendEmail('reject')}
            disabled={isSending}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            <ThumbsDown className="h-4 w-4 mr-2" />
            Send Rejection Email
          </Button>
        </div>
        <Button
          onClick={() => handleSendEmail('shortlist')}
          disabled={isSending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
        >
          <PaperPlane className="h-4 w-4 mr-2" />
          Send Custom Feedback
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmailAutomationSection;
