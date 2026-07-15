import React from 'react';
import { Award, RefreshCw, XCircle, Trophy, ThumbsUp } from 'lucide-react';

interface QuizResultProps {
  score: number;
  total: number;
  points: number;
  quizTitle: string;
  onRetake: () => void;
  onClose: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  score,
  total,
  points,
  quizTitle,
  onRetake,
  onClose
}) => {
  const percentage = Math.round((score / total) * 100);
  const isPerfect = score === total;
  const isPass = percentage >= 60;

  return (
    <div className="text-center py-8 space-y-6 max-w-md mx-auto">
      
      {/* Trophy / Icon Indicator */}
      <div className="flex justify-center">
        {isPerfect ? (
          <div className="p-5 bg-yellow-50 dark:bg-yellow-950/30 text-yellow-500 rounded-full border border-yellow-200 animate-bounce">
            <Trophy className="w-16 h-16" />
          </div>
        ) : isPass ? (
          <div className="p-5 bg-green-50 dark:bg-green-950/30 text-green-500 rounded-full border border-green-200">
            <ThumbsUp className="w-16 h-16" />
          </div>
        ) : (
          <div className="p-5 bg-red-50 dark:bg-red-950/30 text-red-500 rounded-full border border-red-200">
            <XCircle className="w-16 h-16" />
          </div>
        )}
      </div>

      {/* Result Headline */}
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-gray-900 dark:text-white">
          {isPerfect ? 'অসাধারণ! পূর্ণ নম্বর পেয়েছ!' : isPass ? 'চমৎকার! কুইজ পাস করেছ!' : 'আরো একটু প্র্যাকটিস করতে হবে!'}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">
          {quizTitle}
        </p>
      </div>

      {/* Score details */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 flex justify-around text-center max-w-sm mx-auto">
        <div>
          <p className="text-xs text-gray-400">মোট স্কোর</p>
          <p className="text-2xl font-extrabold text-primary-600 font-mono mt-1">{score} / {total}</p>
        </div>
        <div className="border-r border-gray-200 dark:border-gray-800" />
        <div>
          <p className="text-xs text-gray-400">সঠিক উত্তর</p>
          <p className="text-2xl font-extrabold text-green-600 font-mono mt-1">{percentage}%</p>
        </div>
        <div className="border-r border-gray-200 dark:border-gray-800" />
        <div>
          <p className="text-xs text-gray-400">অর্জিত পয়েন্ট</p>
          <p className="text-2xl font-extrabold text-yellow-600 font-mono mt-1">+{points}</p>
        </div>
      </div>

      {/* Encouragement message */}
      <p className="text-sm text-gray-500 dark:text-gray-400 font-normal leading-relaxed max-w-xs mx-auto">
        {isPerfect 
          ? 'তুমি চ্যাপ্টারটির প্রতিটি টপিক চমৎকারভাবে আয়ত্ত করেছ। পরবর্তী চ্যাপ্টার পড়া শুরু করতে পারো!' 
          : isPass 
            ? 'দারুণ অগ্রগতি! যেসব প্রশ্ন ভুল হয়েছে তার ব্যাখ্যাগুলো রিভিউ করে নিয়ে আরেকবার চেষ্টা করতে পারো।' 
            : 'হতাশ হয়ো না! ভিডিও লেকচারগুলো আরেকবার ভালো করে দেখে রিটেক কুইজ বাটনে ক্লিক করো।'}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 max-w-sm mx-auto">
        <button
          onClick={onRetake}
          className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>আবার চেষ্টা করো (Retake)</span>
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-primary-600/20 transition-all cursor-pointer"
        >
          <span>ফিরে যান</span>
        </button>
      </div>

    </div>
  );
};
