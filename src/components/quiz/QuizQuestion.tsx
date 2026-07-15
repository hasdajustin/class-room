import React from 'react';
import { QuizQuestion as QuestionType } from '../../types';
import { Check, X, AlertCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuestionType;
  selectedOptionIndex: number | null;
  onSelectOption: (index: number) => void;
  showFeedback: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOptionIndex,
  onSelectOption,
  showFeedback
}) => {
  return (
    <div className="space-y-6">
      {/* Question Headline */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-primary-600">কুইজ প্রশ্ন</span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Answer Options Grid */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, index) => {
          const isSelected = selectedOptionIndex === index;
          const isCorrect = question.correctAnswerIndex === index;
          const isWrong = isSelected && !isCorrect;

          let optionStyle = "border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-50/50 dark:bg-gray-850 dark:hover:bg-gray-800";
          if (showFeedback) {
            if (isCorrect) {
              optionStyle = "bg-green-50 dark:bg-green-950/20 border-green-500 text-green-700 dark:text-green-400";
            } else if (isWrong) {
              optionStyle = "bg-red-50 dark:bg-red-950/20 border-red-500 text-red-700 dark:text-red-400";
            } else {
              optionStyle = "opacity-50 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850";
            }
          } else if (isSelected) {
            optionStyle = "border-primary-500 bg-primary-50/30 dark:bg-primary-950/10 text-primary-700 dark:text-primary-400";
          }

          return (
            <button
              key={index}
              onClick={() => {
                if (!showFeedback) {
                  onSelectOption(index);
                }
              }}
              disabled={showFeedback}
              className={`
                w-full flex items-center justify-between p-4 rounded-xl border text-sm text-left transition-all font-medium
                ${optionStyle}
                ${!showFeedback ? 'cursor-pointer hover:-translate-y-0.5' : 'cursor-default'}
              `}
            >
              <span className="pr-4">{option}</span>
              
              {/* Feedback status icons */}
              {showFeedback && (
                <span className="shrink-0">
                  {isCorrect ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : isWrong ? (
                    <X className="w-5 h-5 text-red-600" />
                  ) : null}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Box (Visible after submission) */}
      {showFeedback && (
        <div className="p-4.5 bg-primary-50/40 dark:bg-primary-950/10 border border-primary-100 dark:border-primary-900/40 rounded-xl space-y-1.5 animate-fade-in text-sm">
          <div className="flex items-center space-x-1.5 text-primary-700 dark:text-primary-400 font-bold">
            <AlertCircle className="w-4.5 h-4.5" />
            <span>সঠিক উত্তরের ব্যাখ্যা:</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
