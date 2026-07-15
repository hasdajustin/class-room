import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lesson, Course } from '../types';
import { VideoPlayer } from '../components/course/VideoPlayer';
import { ChapterList } from '../components/course/ChapterList';
import { NotesDownload } from '../components/course/NotesDownload';
import { Card } from '../components/common/Card';
import { 
  PlayCircle, FileText, Info, GraduationCap, Star, 
  CheckCircle, ArrowRight, Lock, BookOpen, BrainCircuit
} from 'lucide-react';

export const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, courses, enrollInCourse, quizScores } = useAuth();

  const course = courses.find((c) => c.id === id);

  const [activeTab, setActiveTab] = useState<'video' | 'notes' | 'info'>('video');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<string>('');

  useEffect(() => {
    if (course && course.chapters.length > 0) {
      // Set the first lesson as default
      const firstChapter = course.chapters[0];
      if (firstChapter.lessons.length > 0) {
        setActiveLesson(firstChapter.lessons[0]);
        setActiveChapterId(firstChapter.id);
      }
    }
  }, [course]);

  if (!course) {
    return (
      <div className="max-w-lg mx-auto py-20 text-center">
        <h2 className="text-xl font-bold text-red-600">কোর্সটি খুঁজে পাওয়া যায়নি!</h2>
        <Link to="/courses" className="mt-4 text-primary-600 hover:underline inline-block font-semibold">সকল কোর্সে ফিরে যান</Link>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id);

  const handleEnroll = () => {
    if (!user) {
      alert('কোর্সে এনরোল করতে দয়া করে প্রথমে লগইন করুন।');
      navigate('/login');
      return;
    }
    enrollInCourse(course.id);
  };

  const handleSelectLesson = (lesson: Lesson, chapterId: string) => {
    setActiveLesson(lesson);
    setActiveChapterId(chapterId);
    setActiveTab('video');
  };

  // Find related quizzes
  const associatedQuizzes = [
    { id: 'quiz-phy-ch1', title: 'অধ্যায় ১: ভৌত রাশি ও পরিমাপ কুইজ', courseId: 'course-ssc-physics' },
    { id: 'quiz-ict-ch3', title: 'অধ্যায় ৩: সংখ্যা পদ্ধতি কুইজ', courseId: 'course-hsc-ict' }
  ].filter(q => q.courseId === course.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 flex items-center space-x-1 font-semibold">
        <Link to="/courses" className="hover:text-primary-600">কোর্সসমূহ</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white truncate max-w-[200px]">{course.title}</span>
      </div>

      {/* Course Hero Header Panel */}
      <div className="bg-gray-900 dark:bg-gray-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cover Info */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-primary-600/80 backdrop-blur text-[10px] font-bold rounded">
              {course.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black leading-snug">{course.title}</h1>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">{course.subtitle}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <span className="flex items-center space-x-1.5">
                <img
                  src={course.teacherAvatar}
                  alt={course.teacherName}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="font-semibold">{course.teacherName} ({course.teacherRole})</span>
              </span>
              <span className="h-3.5 w-px bg-gray-700 hidden sm:inline" />
              <span className="flex items-center space-x-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{course.rating} ({course.enrolledCount}+ এনরোলমেন্ট)</span>
              </span>
            </div>
          </div>

          {/* Action Call / Pricing */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center space-y-4">
            <div>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">কোর্স ফি</p>
              <p className="text-3xl font-black mt-1">
                {course.isPremium ? `৳${course.price}` : <span className="text-green-400">সম্পূর্ণ ফ্রি</span>}
              </p>
            </div>

            {isEnrolled ? (
              <div className="w-full py-3 bg-green-600/20 text-green-400 border border-green-500/30 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5">
                <CheckCircle className="w-4.5 h-4.5" />
                <span>আপনি এই কোর্সে যুক্ত আছেন</span>
              </div>
            ) : (
              <button
                onClick={handleEnroll}
                className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-extrabold rounded-xl text-xs transition-all shadow-md shadow-primary-500/10 cursor-pointer"
              >
                {course.isPremium ? 'কোর্সে ভর্তি হোন (Enroll)' : 'ফ্রি এনরোল করুন (Start Free)'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Study Zone (Video Player vs List) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left main content block */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Navigation Tab controls */}
          <div className="flex border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 p-2.5 rounded-2xl gap-2 shadow-sm">
            <button
              onClick={() => setActiveTab('video')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${activeTab === 'video' ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400'}`}
            >
              <PlayCircle className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">ভিডিও লেকচার</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${activeTab === 'notes' ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400'}`}
            >
              <FileText className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">লেকচার নোটস</span>
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer ${activeTab === 'info' ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400'}`}
            >
              <Info className="w-4.5 h-4.5" />
              <span className="hidden sm:inline">কোর্সের বিবরণ</span>
            </button>
          </div>

          {/* Tab contents */}
          <div>
            {activeTab === 'video' && (
              activeLesson ? (
                <VideoPlayer
                  courseId={course.id}
                  chapterId={activeChapterId}
                  lesson={activeLesson}
                />
              ) : (
                <div className="text-center py-10 bg-white dark:bg-gray-850 rounded-2xl border">
                  <p className="text-sm text-gray-500">কোনো ভিডিও লেকচার পাওয়া যায়নি।</p>
                </div>
              )
            )}

            {activeTab === 'notes' && (
              <NotesDownload course={course} />
            )}

            {activeTab === 'info' && (
              <div className="bg-white dark:bg-gray-850 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-6 text-sm">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">কোর্স পরিচিতি</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>

                {/* What you will learn */}
                <div className="space-y-3.5 border-t border-gray-50 dark:border-gray-800 pt-5">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">এই কোর্সে যা যা থাকছে</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>সবচেয়ে সহজ ভাষায় অধ্যায়ভিত্তিক গাণিতিক সমস্যার নিখুঁত ব্যাখ্যা।</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>প্রতিটি চ্যাপ্টার কভার করার পর সৃজনশীল ও MCQ কুইজ।</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>লাইভ প্রশ্নোত্তর সেশন যেখানে সরাসরি মেন্টরদের ডাউট জিজ্ঞেস করতে পারবেন।</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>বোর্ড পরীক্ষার অনুরূপ স্পেশাল হ্যান্ডনোট ও পিডিএফ সাজেশন শীট।</span>
                    </div>
                  </div>
                </div>

                {/* Quizzes associated */}
                {associatedQuizzes.length > 0 && (
                  <div className="bg-primary-50/40 dark:bg-primary-950/15 border border-primary-100 dark:border-primary-900/50 rounded-2xl p-4.5 space-y-3">
                    <div className="flex items-center space-x-1.5 text-primary-700 dark:text-primary-400 font-bold">
                      <BrainCircuit className="w-5 h-5" />
                      <span>অধ্যায়ভিত্তিক সেলফ-কুইজ পরীক্ষা দিন:</span>
                    </div>
                    <p className="text-xs text-gray-500">ভিডিওগুলো শেষ করার পর নিচে থাকা কুইজে অংশগ্রহণ করে নিজের মেধা যাচাই করে নাও!</p>
                    <div className="flex flex-col gap-2 pt-1">
                      {associatedQuizzes.map((quiz) => (
                        <Link
                          key={quiz.id}
                          to={`/quiz/${quiz.id}`}
                          className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 rounded-xl hover:border-primary-400 transition-colors"
                        >
                          <span className="text-xs font-bold text-gray-800 dark:text-white">{quiz.title}</span>
                          <span className="text-xs font-bold text-primary-600 flex items-center space-x-1">
                            <span>কুইজ দাও</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Navigation list panel */}
        <div className="lg:col-span-4 space-y-5">
          <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <div className="border-b border-gray-50 dark:border-gray-850 pb-3 mb-3 flex justify-between items-center">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">কোর্স লেকচার সূচী</h3>
              <span className="text-[10px] text-gray-400">চ্যাপ্টার: {course.chapters.length}টি</span>
            </div>

            <ChapterList
              course={course}
              activeLessonId={activeLesson?.id || ''}
              onSelectLesson={handleSelectLesson}
            />
          </Card>
        </div>

      </div>

    </div>
  );
};
