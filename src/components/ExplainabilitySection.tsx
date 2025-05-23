
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Mock data for the explainability chart
const factorData = [
  { name: 'Skill Match', value: 85, description: 'Technical skills in the resume strongly match job requirements' },
  { name: 'Experience', value: 70, description: 'Candidate has 4 years of experience vs 5 years required' },
  { name: 'Education', value: 90, description: 'Masters degree in relevant field exceeds requirements' },
  { name: 'Keywords', value: 65, description: 'Contains 65% of key terms from job description' },
  { name: 'Leadership', value: 60, description: 'Shows some leadership experience but below job expectations' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <div className="bg-white p-3 rounded-md shadow-md border border-slate-200">
      <p className="font-semibold text-slate-800">{data.name}</p>
      <p className="text-blue-600 font-medium">{data.value}% Match</p>
      <p className="text-xs text-slate-600 mt-1">{data.description}</p>
    </div>
  );
};

const ExplainabilitySection: React.FC = () => {
  return (
    <Card className="border border-slate-200 shadow-md bg-white mb-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-slate-800">
            Why This Score?
          </CardTitle>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Info className="h-4 w-4" />
                <span className="sr-only">Info</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">Feature Importance</h4>
                <p className="text-sm text-muted-foreground">
                  These are the key factors that influenced the fit score calculation. Higher 
                  percentages indicate stronger alignment with job requirements.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={factorData}
            layout="vertical"
            margin={{ top: 5, right: 10, left: 30, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="url(#colorGradient)" 
              barSize={20} 
              radius={[0, 4, 4, 0]}
              animationDuration={1500}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ExplainabilitySection;
