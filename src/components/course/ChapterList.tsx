import React from 'react';
import { Course, Lesson, Chapter } from '../../types';
import { PlayCircle, Lock, CheckCircle, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface ChapterListProps {
  course: Course;
  activeLessonId: string;
  onSelectLesson: (lesson: Lesson, chapterId: string) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({
  course,
  activeLessonId,
  onSelectLesson,
}) => {
  const { user } = useAuth();
  const isEnrolled = user?.enrolledCourses.includes(course.id);

  const canAccessLesson = (lesson: Lesson) => {
    if (!lesson.isPremium) return true; // free lesson
    if (isEnrolled && !course.isPremium) return true; // enrolled in a free course
    if (isEnrolled && course.isPremium) return true; // purchased premium course
    return false;
  };

  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
      {course.chapters.map((chapter: Chapter) => (
        <div key={chapter.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-4">
          {/* Chapter Header */}
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
            {chapter.title}
          </h4>

          {/* Lessons List */}
          <div className="space-y-2">
            {chapter.lessons.length === 0 ? (
              <p className="text-xs text-gray-500 py-2">কোন লেকচার এখনও আপলোড করা হয়নি।</p>
            ) : (
              chapter.lessons.map((lesson: Lesson) => {
                const isActive = lesson.id === activeLessonId;
                const isCompleted = user?.completedChapters.includes(lesson.id);
                const hasAccess = canAccessLesson(lesson);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      if (hasAccess) {
                        onSelectLesson(lesson, chapter.id);
                      } else {
                        alert('এই লেকচারটি দেখতে অনুগ্রহ করে কোর্সে ভর্তি (Enroll) হন।');
                      }
                    }}
                    disabled={!hasAccess && isEnrolled}
                    className={`
                      w-full flex items-center justify-between p-3 rounded-lg text-left text-xs font-medium transition-all
                      ${isActive 
                        ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600' 
                        : 'bg-white dark:bg-gray-850 text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800'
                      }
                      ${!hasAccess ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="flex items-center space-x-2 mr-2">
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      ) : (
                        <PlayCircle className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary-500' : 'text-gray-400'}`} />
                      )}
                      <span className="truncate max-w-[200px]">{lesson.title}</span>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[10px] text-gray-400 font-mono">{lesson.duration}</span>
                      {!hasAccess && (
                        <Lock className="w-3.5 h-3.5 text-amber-500" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
