import React from 'react';
import { Card } from '../common/Card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color
}) => {
  return (
    <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl flex items-center space-x-4">
      {/* Icon frame */}
      <div className={`p-4 rounded-2xl shrink-0 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Info text */}
      <div className="space-y-0.5">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{title}</p>
        <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">
          {value}
        </p>
        <p className="text-[10px] text-gray-400 font-normal">{subtitle}</p>
      </div>
    </Card>
  );
};
