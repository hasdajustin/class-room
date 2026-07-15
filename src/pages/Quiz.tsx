import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mockQuizzes } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { QuizQuestion } from '../components/quiz/QuizQuestion';
import { QuizResult } from '../components/quiz/QuizResult';
import { Card } from '../components/common/Card';
import { Brain, ArrowRight, HelpCircle, ArrowLeft, Trophy, Award } from 'lucide-react';

export const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, addQuizScore } = useAuth();

  const quiz = mockQuizzes.find(q => q.id === id);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div className="max-w-lg mx-auto py-20 text-center">
        <h2 className="text-xl font-bold text-red-600">কুইজটি খুঁজে পাওয়া যায়নি!</h2>
        <Link to="/courses" className="mt-4 text-primary-600 hover:underline inline-block font-semibold">কোর্স সমূহে ফিরে যান</Link>
      </div>
    );
  }

  const currentQuestion = quiz.questions[activeIndex];
  const totalQuestions = quiz.questions.length;
  const selectedOption = selectedAnswers[activeIndex] !== undefined ? selectedAnswers[activeIndex] : null;

  const handleSelectOption = (index: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [activeIndex]: index
    }));
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) {
      alert('অনুগ্রহ করে কুইজের একটি উত্তর নির্বাচন করুন!');
      return;
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setActiveIndex(prev => prev + 1);
  };

  const handleFinish = () => {
    // Calculate final scores
    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    if (user) {
      addQuizScore(quiz.id, quiz.title, correctCount, totalQuestions);
    } else {
      alert('কুইজ স্কোর সংরক্ষণ করার জন্য দয়া করে লগইন করুন!');
    }
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setActiveIndex(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    navigate(`/course/${quiz.courseId}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {isSubmitted ? (
        <Card className="bg-white dark:bg-gray-850 p-6 sm:p-10 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl">
          <QuizResult
            score={quiz.questions.reduce((acc, q, idx) => selectedAnswers[idx] === q.correctAnswerIndex ? acc + 1 : acc, 0)}
            total={totalQuestions}
            points={quiz.questions.reduce((acc, q, idx) => selectedAnswers[idx] === q.correctAnswerIndex ? acc + 15 : acc, 0) + (quiz.questions.reduce((acc, q, idx) => selectedAnswers[idx] === q.correctAnswerIndex ? acc + 1 : acc, 0) === totalQuestions ? 50 : 0)}
            quizTitle={quiz.title}
            onRetake={handleRetake}
            onClose={handleClose}
          />
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Header Progress indicator */}
          <div className="flex justify-between items-center bg-white dark:bg-gray-850 px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800">
            <button 
              onClick={handleClose}
              className="text-xs text-gray-500 hover:text-primary-600 font-bold flex items-center space-x-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>কোর্সে ফিরে যান</span>
            </button>
            
            <div className="text-right">
              <span className="text-xs font-bold text-gray-400">প্রশ্ন: </span>
              <span className="text-sm font-black text-primary-600 font-mono">{activeIndex + 1} / {totalQuestions}</span>
            </div>
          </div>

          {/* Question card frame */}
          <Card className="bg-white dark:bg-gray-850 p-6 sm:p-8 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-md">
            
            {/* Progress bar line */}
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden mb-6">
              <div 
                className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            <QuizQuestion
              question={currentQuestion}
              selectedOptionIndex={selectedOption}
              onSelectOption={handleSelectOption}
              showFeedback={showFeedback}
            />

            {/* Action Controller */}
            <div className="flex justify-end pt-8 mt-4 border-t border-gray-50 dark:border-gray-800">
              {!showFeedback ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className={`
                    px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center space-x-1 cursor-pointer
                    ${selectedOption !== null 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/10' 
                      : 'bg-gray-100 text-gray-400 dark:bg-gray-800 cursor-not-allowed'
                    }
                  `}
                >
                  <span>উত্তর সাবমিট করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                activeIndex + 1 < totalQuestions ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md shadow-primary-500/10 flex items-center space-x-1 cursor-pointer transition-all"
                  >
                    <span>পরবর্তী প্রশ্ন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-xs shadow-md shadow-green-500/10 flex items-center space-x-1 cursor-pointer transition-all"
                  >
                    <Trophy className="w-4 h-4 text-yellow-300" />
                    <span>কুইজ শেষ করুন</span>
                  </button>
                )
              )}
            </div>

          </Card>
        </div>
      )}
    </div>
  );
};
