import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { LiveClass as ClassType } from '../types';
import { Card } from '../components/common/Card';
import { Calendar, Clock, User, Play, VideoOff, CheckCircle } from 'lucide-react';

export const LiveClass: React.FC = () => {
  const { liveClasses } = useAuth();
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming' | 'completed'>('all');

  const filtered = liveClasses.filter(c => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

  const handleJoin = (c: ClassType) => {
    if (c.status === 'upcoming') {
      alert(`"${c.title}" comming soon!`);
      return;
    }
    if (c.status === 'completed') {
      alert('comming soon!');
      return;
    }
    alert(`"${c.title}" comming soon!`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Title */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">
          লাইভ <span className="text-primary-600 dark:text-primary-400">ক্লাস শিডিউল</span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          সরাসরি শিক্ষকদের সাথে ক্লাস করার এবং জটিল প্রশ্নের লাইভ সমাধান নেওয়ার জন্য যুক্ত হোন।
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-850 p-2 rounded-2xl gap-1 shadow-sm max-w-md">
        {(['all', 'live', 'upcoming', 'completed'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`
              flex-1 py-2 text-xs font-bold rounded-xl uppercase transition-all cursor-pointer
              ${filter === status
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400'
              }
            `}
          >
            {status === 'all' ? 'সব সেশন' : status === 'live' ? 'সরাসরি লাইভ' : status === 'upcoming' ? 'আসন্ন' : 'সমাপ্ত'}
          </button>
        ))}
      </div>

      {/* Classes Grid list */}
      <div className="grid grid-cols-1 gap-5">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-850 rounded-2xl border border-dashed border-gray-200">
            <VideoOff className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">বর্তমানে কোনো লাইভ ক্লাস সেশন পাওয়া যায়নি।</p>
          </div>
        ) : (
          filtered.map((c) => (
            <Card 
              key={c.id} 
              className={`bg-white dark:bg-gray-850 p-5 border rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all hover:shadow-md ${
                c.status === 'live' ? 'border-red-300 ring-2 ring-red-100 dark:ring-red-950/20' : 'border-gray-100 dark:border-gray-800'
              }`}
            >
              <div className="space-y-3.5">
                {/* Status indicator badge */}
                <div>
                  {c.status === 'live' ? (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400 text-[10px] font-extrabold rounded-full uppercase animate-pulse">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 inline-block mr-1" />
                      <span>সরাসরি সম্প্রচারিত (LIVE)</span>
                    </span>
                  ) : c.status === 'upcoming' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400 text-[10px] font-bold rounded-full">
                      আসন্ন (Upcoming)
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 bg-gray-150 text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-[10px] font-bold rounded-full">
                      সমাপ্ত (Recorded)
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 font-bold">{c.subject}</span>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white leading-snug">{c.title}</h3>
                </div>

                {/* Details timeline row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 font-semibold">
                  <span className="flex items-center space-x-1">
                    <User className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>শিক্ষক: {c.teacherName}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>তারিখ: {c.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>সময়: {c.time}</span>
                  </span>
                </div>
              </div>

              {/* Action Trigger button */}
              <button
                onClick={() => handleJoin(c)}
                className={`
                  w-full sm:w-auto px-5 py-2.5 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 transition-all shadow-sm
                  ${c.status === 'live' 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/10' 
                    : c.status === 'upcoming'
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/10'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                  }
                `}
              >
                {c.status === 'live' ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>সরাসরি ক্লাসে যোগ দিন</span>
                  </>
                ) : c.status === 'upcoming' ? (
                  <span>রিজার্ভ স্লট / জয়েন করুন</span>
                ) : (
                  <>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>রেকর্ড পাওয়া যাবে</span>
                  </>
                )}
              </button>
            </Card>
          ))
        )}
      </div>

    </div>
  );
};
