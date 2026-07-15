import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute w-12 h-12 rounded-full border-4 border-primary-200 dark:border-primary-950"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</p>
    </div>
  );
};
