
import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  RadialBarChart, 
  RadialBar, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart';

interface AnalyticsDashboardProps {
  skillsMatch: number;
  experience: number;
  education: number;
  keywords: number;
  hasBias: boolean;
  biasFactors?: {
    name: string;
    value: number;
    color: string;
  }[];
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  skillsMatch,
  experience,
  education,
  keywords,
  hasBias,
  biasFactors = []
}) => {
  // Skills data for radial bar chart
  const skillsData = [
    { name: 'Skills Match', value: skillsMatch, fill: '#3B82F6' },
    { name: 'Experience', value: experience, fill: '#06B6D4' },
    { name: 'Education', value: education, fill: '#8B5CF6' },
    { name: 'Keywords', value: keywords, fill: '#10B981' }
  ];

  // Default bias factors if none provided
  const defaultBiasFactors = [
    { name: 'Gender Neutral', value: 85, color: '#10B981' },
    { name: 'Regional', value: 10, color: '#F97316' },
    { name: 'Age Neutral', value: 95, color: '#3B82F6' },
    { name: 'Cultural', value: 5, color: '#F43F5E' }
  ];

  const biasData = hasBias ? (biasFactors.length ? biasFactors : defaultBiasFactors) : [];
  
  const chartConfig = {
    skills: { theme: { light: '#3B82F6', dark: '#2563EB' } },
    experience: { theme: { light: '#06B6D4', dark: '#0891B2' } },
    education: { theme: { light: '#8B5CF6', dark: '#7C3AED' } },
    keywords: { theme: { light: '#10B981', dark: '#059669' } },
    bias1: { theme: { light: '#10B981', dark: '#059669' } },
    bias2: { theme: { light: '#F97316', dark: '#EA580C' } },
    bias3: { theme: { light: '#3B82F6', dark: '#2563EB' } },
    bias4: { theme: { light: '#F43F5E', dark: '#E11D48' } },
  };

  return (
    <motion.div
      className="glass-card p-6 w-full max-w-3xl mx-auto mt-8"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <h3 className="text-xl font-semibold mb-6 text-center font-tech">Fit Analysis</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="text-lg font-medium text-center font-tech">Skills & Qualifications</h4>
          <div className="h-[300px]">
            <ChartContainer config={chartConfig}>
              <RadialBarChart
                innerRadius="20%"
                outerRadius="90%"
                data={skillsData}
                startAngle={180}
                endAngle={0}
                barSize={15}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                />
              </RadialBarChart>
            </ChartContainer>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {skillsData.map((entry, index) => (
              <div key={`skill-${index}`} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-xs font-tech">{entry.name}: {entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
        
        {hasBias && (
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-center font-tech">Bias Factors Detected</h4>
            <div className="h-[300px]">
              <ChartContainer config={chartConfig}>
                <PieChart>
                  <Pie
                    data={biasData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {biasData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {biasData.map((entry, index) => (
                <div key={`bias-${index}`} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-xs font-tech">{entry.name}: {entry.value}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          className="primary-gradient hover:opacity-90 transition-opacity"
          onClick={() => alert('Detailed report feature coming soon!')}
        >
          View Detailed Report
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
      </div>
    </motion.div>
  );
};

export default AnalyticsDashboard;
