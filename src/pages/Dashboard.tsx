import React from 'react';
import { useAuth } from '../context/AuthContext';
import { StatsCard } from '../components/dashboard/StatsCard';
import { ProgressChart } from '../components/dashboard/ProgressChart';
import { ActivityLog } from '../components/dashboard/ActivityLog';
import { Card } from '../components/common/Card';
import { Link } from 'react-router-dom';
import { 
  Award, BookOpen, Star, Sparkles, AlertCircle, 
  ChevronRight, CalendarCheck, HelpCircle, Trophy, Compass
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, courses } = useAuth();

  if (!user) {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">ড্যাশবোর্ড দেখতে লগইন করুন</h2>
        <p className="text-xs text-gray-500">আপনার প্রোগ্রেস ও কার্যক্রমের ডাটা দেখতে দয়া করে লগইন করুন।</p>
        <Link to="/login" className="px-6 py-2 bg-primary-600 text-white text-xs font-bold rounded-xl shadow inline-block hover:bg-primary-700">লগইন</Link>
      </div>
    );
  }

  // Calculate metrics
  const enrolledCount = user.enrolledCourses.length;
  const completedCount = user.completedChapters.length;
  const badgeCount = user.badges.length;

  // Render proper badge icon based on name
  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-yellow-500" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-500" />;
      case 'Zap': return <Trophy className="w-6 h-6 text-amber-500 animate-pulse" />;
      case 'Compass': return <Compass className="w-6 h-6 text-purple-500" />;
      default: return <Sparkles className="w-6 h-6 text-green-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Welcome Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white dark:bg-gray-850 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center space-x-2">
            <span>সালাম, {user.name}!</span>
            <Sparkles className="w-5 h-5 text-yellow-500" />
          </h1>
          <p className="text-xs text-gray-400 font-medium">
            {user.institution} • {user.class}
          </p>
        </div>

        <Link 
          to="/profile" 
          className="px-4 py-2 bg-gray-50 hover:bg-primary-50 dark:bg-gray-800 dark:hover:bg-primary-950/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 border border-gray-100 dark:border-gray-700 text-xs font-bold rounded-xl flex items-center space-x-1 transition-all shrink-0"
        >
          <span>প্রোফাইল সম্পাদন</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="অর্জিত মোট পয়েন্ট"
          value={`${user.points} PTS`}
          subtitle="কুইজ ও ভিডিও সেশন থেকে"
          icon={Star}
          color="bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400"
        />
        <StatsCard
          title="ভর্তি হওয়া কোর্সসমূহ"
          value={enrolledCount}
          subtitle="অ্যাক্টিভ সিলেবাস প্রস্তুতির"
          icon={BookOpen}
          color="bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
        />
        <StatsCard
          title="সম্পন্ন চ্যাপ্টার লেকচার"
          value={completedCount}
          subtitle="পুরোপুরি ভিডিও সেশন দেখা"
          icon={CalendarCheck}
          color="bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400"
        />
        <StatsCard
          title="অর্জিত মেডেল ব্যাজ"
          value={badgeCount}
          subtitle="বিশেষ মাইলস্টোন অর্জনের"
          icon={Award}
          color="bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
        />
      </div>

      {/* Main double column block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Analytics & Badges Cabinet */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Recharts Analytics Card */}
          <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <div className="border-b border-gray-50 dark:border-gray-800 pb-3 mb-4 flex justify-between items-center">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">কুইজ অগ্রগতি ট্র্যাকার (Quiz Progress)</h3>
              <span className="text-[10px] bg-blue-50 dark:bg-blue-950/40 text-blue-600 px-2 py-0.5 rounded-full font-bold">শতকরা পারফরম্যান্স</span>
            </div>
            
            <ProgressChart scores={user.quizScores} />
          </Card>

          {/* Badges Cabinet Showcase */}
          <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-4">
            <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">মেডেল কেবিনেট (Unlocked Badges)</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {user.badges.map((b) => (
                <div 
                  key={b.id}
                  className="p-4 bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-xl flex items-center space-x-3.5"
                >
                  <div className="p-2.5 bg-white dark:bg-gray-850 rounded-xl shadow-sm shrink-0">
                    {renderBadgeIcon(b.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-950 dark:text-white">{b.title}</h4>
                    <p className="text-[9px] text-gray-400 leading-normal mt-0.5">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Side: Chronology Log */}
        <div className="lg:col-span-4">
          <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <ActivityLog user={user} />
          </Card>
        </div>

      </div>

    </div>
  );
};
