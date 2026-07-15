import React from 'react';
import { Quiz } from '../../types';
import { Brain, HelpCircle, Award, PlayCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { useAuth } from '../../context/AuthContext';

interface QuizCardProps {
  quiz: Quiz;
  onStartQuiz: (quiz: Quiz) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, onStartQuiz }) => {
  const { user } = useAuth();
  const pastScore = user?.quizScores.find(q => q.quizId === quiz.id);

  return (
    <Card className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 p-5 rounded-2xl flex flex-col justify-between h-full hover:shadow-md transition-all">
      <div className="space-y-4">
        {/* Header Icon */}
        <div className="flex justify-between items-start">
          <div className="p-3 bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 rounded-2xl">
            <Brain className="w-6 h-6" />
          </div>
          
          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wide font-extrabold rounded bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400 border border-yellow-150 dark:border-yellow-900/40 flex items-center space-x-1">
            <Award className="w-3.5 h-3.5" />
            <span>+{quiz.pointsAwarded} PTS</span>
          </span>
        </div>

        {/* Text */}
        <div className="space-y-1.5">
          <span className="text-[10px] text-gray-400 font-bold">{quiz.courseTitle}</span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
            {quiz.title}
          </h3>
          <p className="text-xs text-gray-500 flex items-center space-x-1 font-normal">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{quiz.questions.length}টি বহুনির্বাচনী প্রশ্ন</span>
          </p>
        </div>

        {/* High score info */}
        {pastScore && (
          <div className="bg-green-50/50 dark:bg-green-950/10 border border-green-100/50 dark:border-green-900/30 rounded-xl p-2 px-3 text-xs flex justify-between items-center text-green-700 dark:text-green-400 font-medium">
            <span>সর্বশেষ স্কোর:</span>
            <span>{pastScore.score} / {pastScore.totalQuestions}</span>
          </div>
        )}
      </div>

      <button
        onClick={() => onStartQuiz(quiz)}
        className="w-full mt-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1 cursor-pointer transition-all shadow-sm"
      >
        <PlayCircle className="w-4 h-4" />
        <span>কুইজ শুরু করো</span>
      </button>
    </Card>
  );
};
