
import React from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts';
import { Button } from '@/components/ui/button';
import { fadeInUp, scaleIn } from '@/lib/animations';

const AnalyticsDashboard: React.FC = () => {
  // Dummy data for the charts
  const skillsData = [
    { name: 'Skills Match', value: 78, fill: '#3B82F6' },
    { name: 'Experience', value: 65, fill: '#8B5CF6' },
    { name: 'Education', value: 82, fill: '#06B6D4' },
    { name: 'Keywords', value: 71, fill: '#10B981' },
  ];
  
  const biasFactors = [
    { name: 'Gender Neutral', value: 95, color: '#10B981' },
    { name: 'Age Neutral', value: 90, color: '#3B82F6' },
    { name: 'Regional Neutral', value: 85, color: '#8B5CF6' },
    { name: 'Name Neutral', value: 92, color: '#06B6D4' },
  ];
  
  const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#06B6D4'];
  
  const CustomLegend = () => (
    <ul className="flex flex-wrap gap-4 justify-center text-xs mt-4">
      {skillsData.map((entry, index) => (
        <li key={`legend-${index}`} className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-1" 
            style={{ backgroundColor: entry.fill }}
          />
          <span>{entry.name}: {entry.value}%</span>
        </li>
      ))}
    </ul>
  );
  
  const BiasLegend = () => (
    <ul className="flex flex-wrap gap-4 justify-center text-xs mt-4">
      {biasFactors.map((entry, index) => (
        <li key={`bias-legend-${index}`} className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-1" 
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.name}: {entry.value}%</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div 
        className="glass-card p-6 mb-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 font-orbitron text-center">Fit Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={scaleIn}>
            <h3 className="font-orbitron font-semibold mb-4 text-center">Skills & Experience</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="10%" 
                  outerRadius="80%" 
                  data={skillsData} 
                  startAngle={180} 
                  endAngle={0}
                  barSize={15}
                >
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={10}
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
              <CustomLegend />
            </div>
          </motion.div>
          
          <motion.div variants={scaleIn}>
            <h3 className="font-orbitron font-semibold mb-4 text-center">Fairness Analysis</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={biasFactors}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {biasFactors.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <BiasLegend />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            className="bg-gradient-to-r from-[#1E1B4B] to-[#374151] hover:opacity-90 transition-opacity text-white"
          >
            View Detailed Report
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsDashboard;
