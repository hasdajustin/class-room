import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-850 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 shadow-sm transition-all duration-200
        ${hoverable ? 'hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700' : ''}
        ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
