import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { CourseCard } from '../components/course/CourseCard';
import { SearchBar } from '../components/common/SearchBar';
import { Filter, Star, BookOpen, GraduationCap } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Courses: React.FC = () => {
  const { courses } = useAuth();
  const location = useLocation();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Class 6-8' | 'Class 9-10' | 'HSC'>('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [showPremium, setShowPremium] = useState<'All' | 'Free' | 'Premium'>('All');

  // Parse category filter from URL search params if any
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam === 'Class 6-8' || catParam === 'Class 9-10' || catParam === 'HSC') {
      setSelectedCategory(catParam);
    }
  }, [location.search]);

  // Extract unique subjects
  const subjects = ['All', ...Array.from(new Set(courses.map(c => c.subject.split(' ')[0])))];

  const filteredCourses = courses.filter((course) => {
    // Search filter
    const matchesSearch = 
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.subject.toLowerCase().includes(search.toLowerCase()) ||
      course.teacherName.toLowerCase().includes(search.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;

    // Subject filter
    const matchesSubject = selectedSubject === 'All' || course.subject.includes(selectedSubject);

    // Premium status filter
    const matchesPremium = 
      showPremium === 'All' ||
      (showPremium === 'Free' && !course.isPremium) ||
      (showPremium === 'Premium' && course.isPremium);

    return matchesSearch && matchesCategory && matchesSubject && matchesPremium;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Title */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
          আমাদের <span className="text-primary-600 dark:text-primary-400">সকল কোর্সসমূহ</span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ষষ্ঠ থেকে দ্বাদশ শ্রেণী পর্যন্ত একাডেমিক ও বোর্ড পরীক্ষার সম্পূর্ণ সিলেবাস কভার কোর্স।
        </p>
      </div>

      {/* Search and Filters Hub */}
      <div className="bg-white dark:bg-gray-850 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <SearchBar value={search} onChange={setSearch} />
          
          {/* Grade categories pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'Class 6-8', 'Class 9-10', 'HSC'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-600/10'
                    : 'bg-gray-50 dark:bg-gray-850 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {cat === 'All' ? 'সব শ্রেণী' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-50 dark:border-gray-800 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Subjects dropdown/filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span className="font-bold flex items-center space-x-1">
              <Filter className="w-3.5 h-3.5" />
              <span>বিষয়:</span>
            </span>
            <div className="flex flex-wrap gap-1">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                    selectedSubject === sub
                      ? 'bg-primary-50 dark:bg-primary-950/40 border-primary-300 text-primary-700 dark:text-primary-400 font-bold'
                      : 'bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {sub === 'All' ? 'সব বিষয়' : sub}
                </button>
              ))}
            </div>
          </div>

          {/* Price status selector */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-gray-500 font-medium">কোর্সের ধরন:</span>
            <select
              value={showPremium}
              onChange={(e) => setShowPremium(e.target.value as any)}
              className="p-1.5 px-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <option value="All">সব কোর্স</option>
              <option value="Free">ফ্রি কোর্স</option>
              <option value="Premium">প্রিমিয়াম</option>
            </select>
          </div>

        </div>
      </div>

      {/* Courses catalog Grid list */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-gray-850 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900 dark:text-white">কোনো কোর্স পাওয়া যায়নি</h3>
          <p className="text-xs text-gray-500 mt-1">অনুগ্রহ করে ভিন্ন কোনো কীওয়ার্ড বা ক্যাটাগরি ফিল্টার নির্বাচন করুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

    </div>
  );
};
