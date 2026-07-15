import React from 'react';
import { 
  BarChart2, BookOpen, Users, CalendarPlus, 
  Settings, ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  setActiveTab
}) => {
  const menuItems = [
    { id: 'overview', name: 'ওভারভিউ ড্যাশবোর্ড', icon: BarChart2 },
    { id: 'courses', name: 'কোর্স পরিচালনা', icon: BookOpen },
    { id: 'students', name: 'শিক্ষার্থী ডাটাবেজ', icon: Users },
    { id: 'live', name: 'লাইভ ক্লাস পরিচালনা', icon: CalendarPlus }
  ];

  return (
    <div className="bg-white dark:bg-gray-850 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 space-y-4 lg:space-y-6 h-max">
      {/* Brand Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start gap-2 lg:gap-0">
        <div>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline mb-1 sm:mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>স্টুডেন্ট ড্যাশবোর্ড</span>
          </Link>
          <h3 className="text-base font-extrabold text-gray-900 dark:text-white mt-1">শিক্ষক কন্ট্রোল</h3>
          <p className="text-[10px] text-gray-400">এডমিন প্যানেল ও কনটেন্ট ম্যানেজার</p>
        </div>
      </div>

      {/* Menu Options */}
      <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2 lg:gap-1 lg:space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center space-x-2 p-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer justify-center lg:justify-start
                ${isActive
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/10'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
              `}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer hint */}
      <div className="hidden sm:block border-t border-gray-50 dark:border-gray-800 pt-4 text-[10px] text-gray-400 leading-normal">
        <p className="font-semibold text-gray-500">প্ল্যাটফর্ম রোল: শিক্ষক</p>
        <p className="mt-1">সকল ডেটা ব্রাউজার লোকালস্টেজে সিঙ্কড আছে।</p>
      </div>
    </div>
  );
};
