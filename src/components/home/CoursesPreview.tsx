import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Star, ArrowRight, BookOpen, Clock, Lock } from 'lucide-react';
import { Card } from '../common/Card';

export const CoursesPreview: React.FC = () => {
  const { courses } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Class 6-8' | 'Class 9-10' | 'HSC'>('All');

  const categories: ('All' | 'Class 6-8' | 'Class 9-10' | 'HSC')[] = ['All', 'Class 6-8', 'Class 9-10', 'HSC'];

  const filteredCourses = courses.filter(course => {
    if (selectedCategory === 'All') return true;
    return course.category === selectedCategory;
  }).slice(0, 3); // top 3 for preview

  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-serif font-extrabold text-gray-900 dark:text-white tracking-tight">
              আমাদের <span className="text-primary-600 dark:text-primary-400">জনপ্রিয়</span> কোর্সসমূহ
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
              অভিজ্ঞ শিক্ষকদের দ্বারা সাজানো অধ্যায়ভিত্তিক পূর্ণাঙ্গ কোর্স ও বিষয়ভিত্তিক সমাধান।
            </p>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 border-primary-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {cat === 'All' ? 'সব শ্রেণী' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group flex flex-col h-full bg-white dark:bg-gray-850 hover:shadow-lg rounded-2xl overflow-hidden p-0 border border-gray-100 dark:border-gray-800">
              
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {course.category}
                </span>
                {course.isPremium && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center space-x-1">
                    <Lock className="w-3 h-3" />
                    <span>PREMIUM</span>
                  </span>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-xs text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span>{course.rating.toFixed(1)}</span>
                    <span className="text-gray-400 font-normal">({course.enrolledCount}+ শিক্ষার্থী)</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                <div className="border-t border-gray-50 dark:border-gray-800 pt-4 mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <img
                      src={course.teacherAvatar}
                      alt={course.teacherName}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="font-medium">{course.teacherName}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-primary-600 font-bold text-sm">
                    {course.isPremium ? (
                      <span>৳{course.price}</span>
                    ) : (
                      <span className="text-green-600">ফ্রি</span>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-3">
                  <Link
                    to={`/course/${course.id}`}
                    className="w-full py-2.5 bg-gray-50 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-xl text-center text-xs flex items-center justify-center space-x-1 border border-gray-100 dark:border-gray-850 group-hover:border-primary-200 dark:group-hover:border-primary-950/50 transition-all text-gray-700 dark:text-gray-300"
                  >
                    <span>কোর্সটি দেখাও</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </Card>
          ))}
        </div>

        {/* View All CTAs */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 text-sm font-bold text-primary-600 hover:text-primary-700 hover:underline"
          >
            <span>সবগুলো কোর্স দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
