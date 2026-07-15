import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../types';
import { Star, Clock, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../common/Card';
import { useAuth } from '../../context/AuthContext';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { user } = useAuth();
  const isEnrolled = user?.enrolledCourses.includes(course.id);

  return (
    <Card className="group flex flex-col h-full bg-white dark:bg-gray-850 p-0 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300">
      
      {/* Thumbnail with Tags */}
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded">
          {course.category}
        </span>

        {/* Subject Badge */}
        <span className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded">
          {course.subject}
        </span>

        {/* Enrollment/Premium Status */}
        {isEnrolled ? (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ভর্তি আছেন</span>
          </span>
        ) : course.isPremium ? (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center space-x-1">
            <Lock className="w-3 h-3" />
            <span>PREMIUM</span>
          </span>
        ) : (
          <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded">
            ফ্রি
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Rating */}
          <div className="flex items-center space-x-1 text-xs text-amber-500 font-bold">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-gray-400 font-normal">({course.enrolledCount}+ এনরোলড)</span>
          </div>

          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug group-hover:text-primary-600 transition-colors">
            {course.title}
          </h3>

          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed font-normal">
            {course.subtitle}
          </p>
        </div>

        {/* Footer Details */}
        <div className="border-t border-gray-50 dark:border-gray-800 pt-4 mt-4 space-y-3.5">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1.5">
              <img
                src={course.teacherAvatar}
                alt={course.teacherName}
                className="w-5.5 h-5.5 rounded-full object-cover"
              />
              <span className="font-medium truncate max-w-[120px]">{course.teacherName}</span>
            </div>

            <div className="font-bold text-sm text-primary-600 flex items-center">
              {course.isPremium ? (
                <span>৳{course.price}</span>
              ) : (
                <span className="text-green-600">ফ্রি</span>
              )}
            </div>
          </div>

          {/* Action Link */}
          <Link
            to={`/course/${course.id}`}
            className="w-full py-2.5 bg-gray-50 hover:bg-primary-50 dark:bg-gray-800 dark:hover:bg-primary-950/20 text-center font-bold text-xs flex items-center justify-center space-x-1.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors border border-gray-100 dark:border-gray-800"
          >
            <span>{isEnrolled ? 'পড়াশোনা চালিয়ে যান' : 'বিস্তারিত দেখুন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </Card>
  );
};
