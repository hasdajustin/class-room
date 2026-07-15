import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center p-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-primary-600 tracking-wider">404</h1>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!</h2>
        <p className="text-xs text-gray-400 font-normal leading-relaxed">
          দুঃখিত, আপনি যে ইউআরএল লিংকে প্রবেশ করেছেন তা এই লার্নিং প্ল্যাটফর্মে বিদ্যমান নেই।
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-primary-500/10 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>হোমে ফিরে যান</span>
          </Link>
          <Link
            to="/courses"
            className="w-full sm:w-auto px-5 py-2.5 bg-gray-150 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>কোর্সসমূহ দেখুন</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
