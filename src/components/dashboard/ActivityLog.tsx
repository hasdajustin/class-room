import React from 'react';
import { User } from '../../types';
import { CheckCircle, BookOpen, Star, Award, Calendar } from 'lucide-react';

interface ActivityLogProps {
  user: User;
}

export const ActivityLog: React.FC<ActivityLogProps> = ({ user }) => {
  // Synthesize custom chronological activities from user's current states
  const activities = [
    ...user.quizScores.map(q => ({
      type: 'quiz',
      title: `"${q.quizTitle}" সম্পন্ন করেছেন`,
      meta: `স্কোর: ${q.score}/${q.totalQuestions}`,
      date: q.takenAt,
      points: `+${q.score * 15} PTS`,
      icon: Star,
      iconBg: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/20 dark:text-yellow-400'
    })),
    ...user.enrolledCourses.map((c, idx) => ({
      type: 'enroll',
      title: 'কোর্সে সফলভাবে ভর্তি হয়েছেন',
      meta: idx === 0 ? 'এসএসসি পদার্থবিজ্ঞান' : 'নতুন কোর্স',
      date: '২০২৬-০৭-১২',
      points: '+২০ PTS',
      icon: BookOpen,
      iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400'
    })),
    ...user.badges.map(b => ({
      type: 'badge',
      title: `বিশেষ ব্যাজ লাভ: "${b.title}"`,
      meta: b.description,
      date: '২০২৬-০৭-১৪',
      points: 'নতুন ব্যাজ',
      icon: Award,
      iconBg: 'bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400'
    }))
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">সাম্প্রতিক কার্যক্রম</h3>
        <span className="text-xs text-gray-400">মোট কার্যক্রম: {activities.length}টি</span>
      </div>

      <div className="space-y-3">
        {activities.length === 0 ? (
          <p className="text-sm text-gray-500 py-6 text-center">এখনও কোনো কার্যক্রম রেকর্ড করা হয়নি।</p>
        ) : (
          activities.map((act, index) => {
            const Icon = act.icon;
            return (
              <div 
                key={index}
                className="flex items-center justify-between p-3.5 bg-white dark:bg-gray-850 rounded-xl border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center space-x-3 mr-3 min-w-0">
                  <div className={`p-2.5 rounded-xl shrink-0 ${act.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{act.title}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate mt-0.5">{act.meta}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block px-2 py-0.5 text-[9px] font-bold rounded bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 mb-1">
                    {act.points}
                  </span>
                  <p className="text-[9px] text-gray-400 flex items-center justify-end space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{act.date}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
