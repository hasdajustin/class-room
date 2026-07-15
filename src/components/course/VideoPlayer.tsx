import React from 'react';
import { Lesson, Course } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { CheckCircle2, Play, Award, FileText } from 'lucide-react';

interface VideoPlayerProps {
  courseId: string;
  chapterId: string;
  lesson: Lesson;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  courseId,
  chapterId,
  lesson
}) => {
  const { user, completeLesson } = useAuth();
  
  const isCompleted = user?.completedChapters.includes(lesson.id);
  const isEnrolled = user?.enrolledCourses.includes(courseId);

  const handleMarkComplete = () => {
    if (!isEnrolled) {
      alert('অনুগ্রহ করে প্রথমে কোর্সে ভর্তি হন!');
      return;
    }
    completeLesson(courseId, chapterId, lesson.id);
  };

  return (
    <div className="space-y-4">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border border-gray-100 dark:border-gray-800">
        <iframe
          src={lesson.videoUrl}
          title={lesson.title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Lesson details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-gray-850 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="space-y-1.5 max-w-xl">
          <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
            ভিডিও লেকচার
          </span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
            {lesson.title}
          </h3>
          <p className="text-xs text-gray-400 font-mono">ভিডিওর দৈর্ঘ্য: {lesson.duration}</p>
        </div>

        {/* Complete Toggle Actions */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {lesson.pdfUrl && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('পিডিএফ হ্যান্ডনোট সফলভাবে ডাউনলোড শুরু হয়েছে!');
              }}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold border border-gray-100 dark:border-gray-700 flex items-center space-x-1.5 transition-colors"
            >
              <FileText className="w-4 h-4 text-primary-500" />
              <span>লেকচার নোট (PDF)</span>
            </a>
          )}

          {isCompleted ? (
            <div className="px-4 py-2 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-xl text-xs font-bold border border-green-200 dark:border-green-900/50 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4.5 h-4.5" />
              <span>লেকচার সম্পন্ন</span>
            </div>
          ) : (
            <button
              onClick={handleMarkComplete}
              disabled={!isEnrolled}
              className={`
                px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all
                ${isEnrolled 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md cursor-pointer' 
                  : 'bg-gray-100 text-gray-400 dark:bg-gray-800 cursor-not-allowed'
                }
              `}
            >
              <Award className="w-4.5 h-4.5 text-yellow-300" />
              <span>সম্পন্ন চিহ্নিত করো (+১০ পয়েন্ট)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
