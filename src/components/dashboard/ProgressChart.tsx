import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { QuizScore } from '../../types';

interface ProgressChartProps {
  scores: QuizScore[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ scores }) => {
  // Map scores into recharts compatible data structure
  const data = scores.slice().reverse().map(item => ({
    name: item.quizTitle.replace(' কুইজ', '').slice(0, 10) + '...',
    'সঠিক উত্তর': item.score,
    'মোট প্রশ্ন': item.totalQuestions,
    'শতকরা (%)': Math.round((item.score / item.totalQuestions) * 100)
  }));

  const placeholderData = [
    { name: 'কুইজ ১', 'সঠিক উত্তর': 2, 'শতকরা (%)': 66 },
    { name: 'কুইজ ২', 'সঠিক উত্তর': 3, 'শতকরা (%)': 100 },
    { name: 'কুইজ ৩', 'সঠিক উত্তর': 1, 'শতকরা (%)': 33 },
    { name: 'কুইজ ৪', 'সঠিক উত্তর': 3, 'শতকরা (%)': 100 },
  ];

  const chartData = data.length > 0 ? data : placeholderData;

  return (
    <div className="w-full h-64 mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9"/>
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#94a3b8', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: 'none', 
              borderRadius: '12px',
              color: '#fff',
              fontSize: '11px',
              fontFamily: 'Hind Siliguri'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="শতকরা (%)" 
            stroke="#3b82f6" 
            strokeWidth={2.5}
            fillOpacity={1} 
            fill="url(#colorScore)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
