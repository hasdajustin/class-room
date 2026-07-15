import React, { useState, useEffect } from 'react';
import { Card } from '../common/Card';
import { Clock, Calendar, CheckSquare, Plus, Trash2, Award, Sparkles } from 'lucide-react';

export const BoardExamCountdown: React.FC = () => {
  const [examType, setExamType] = useState<'SSC' | 'HSC'>('SSC');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [goals, setGoals] = useState<{ id: string; text: string; done: boolean }[]>(() => {
    const saved = localStorage.getItem('study_goals');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', text: 'পদার্থবিজ্ঞান গতি অধ্যায়ের ৩টি সৃজনশীল অনুশীলন করা', done: false },
      { id: '2', text: 'আইসিটি সংখ্যা পদ্ধতির ৫টি রূপান্তর কুইজ দেওয়া', done: true }
    ];
  });
  const [newGoal, setNewGoal] = useState('');

  // Persist goals to local storage
  useEffect(() => {
    localStorage.setItem('study_goals', JSON.stringify(goals));
  }, [goals]);

  // Exam Target Dates:
  // Current time is July 14, 2026
  // SSC 2027 starts approx Feb 15, 2027
  // HSC 2027 starts approx June 25, 2027
  useEffect(() => {
    const targetDate = examType === 'SSC' 
      ? new Date('2027-02-15T10:00:00').getTime() 
      : new Date('2027-06-25T10:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [examType]);

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.trim()) return;
    const item = {
      id: Date.now().toString(),
      text: newGoal.trim(),
      done: false
    };
    setGoals([...goals, item]);
    setNewGoal('');
  };

  const toggleGoal = (id: string) => {
    setGoals(goals.map(g => g.id === id ? { ...g, done: !g.done } : g));
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const formatBnNumber = (num: number) => {
    const englishToBengaliMap: { [key: string]: string } = {
      '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
      '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
    };
    return num.toString().split('').map(digit => englishToBengaliMap[digit] || digit).join('');
  };

  const completedGoalsCount = goals.filter(g => g.done).length;

  return (
    <section className="py-12 bg-[#fcfcf9] dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Countdown timer left */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/50 rounded-full text-amber-800 dark:text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>আজকের বিশেষ মোটিভেশন ও রুটিন গাইড</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white leading-tight">
                বোর্ড পরীক্ষা <span className="text-primary-600 dark:text-primary-400 font-serif-bengali">২০২৭</span> প্রস্তুতি ট্র্যাকার
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl font-normal">
                বোর্ড পরীক্ষার আর বেশি দিন বাকি নেই! প্রতিটি অধ্যায় ভালোভাবে শেষ করতে আজ থেকেই লক্ষ্য ঠিক করো। নিচে তোমার পরীক্ষার ধরন নির্বাচন করে বাকি সময় দেখে নাও।
              </p>

              {/* Pill selection */}
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => setExamType('SSC')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    examType === 'SSC'
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50'
                  }`}
                >
                  এসএসসি পরীক্ষা ২০২৭ (Feb 2027)
                </button>
                <button
                  onClick={() => setExamType('HSC')}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    examType === 'HSC'
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-850 border border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50'
                  }`}
                >
                  এইচএসসি পরীক্ষা ২০২৭ (Jun 2027)
                </button>
              </div>
            </div>

            {/* Live countdown boxes */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-6">
              {[
                { label: 'দিন', value: timeLeft.days },
                { label: 'ঘণ্টা', value: timeLeft.hours },
                { label: 'মিনিট', value: timeLeft.minutes },
                { label: 'সেকেন্ড', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 rounded-2xl p-3 sm:p-5 text-center shadow-sm">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-primary-700 dark:text-primary-400 font-mono tracking-tight">
                    {formatBnNumber(item.value)}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-bold block mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Goal planner card right */}
          <div className="lg:col-span-5">
            <Card className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 p-6 rounded-3xl shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4 border-b border-gray-50 dark:border-gray-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950 dark:text-white flex items-center space-x-2">
                      <CheckSquare className="w-5 h-5 text-primary-600 shrink-0" />
                      <span>দৈনিক স্টাডি গোল প্ল্যানার</span>
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1">আজ যা যা শেষ করতে চাও তা এখানে লিখে রাখো!</p>
                  </div>
                  <div className="bg-primary-50 dark:bg-primary-950 px-2 py-1 rounded-lg">
                    <span className="text-[10px] font-bold text-primary-700 dark:text-primary-300">
                      {formatBnNumber(completedGoalsCount)}/{formatBnNumber(goals.length)}
                    </span>
                  </div>
                </div>

                {/* Goals List */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {goals.length === 0 ? (
                    <p className="text-[11px] text-gray-400 py-6 text-center">আজকের কোনো লক্ষ্য যোগ করোনি। নিচের ইনপুটে লক্ষ্য টাইপ করো!</p>
                  ) : (
                    goals.map(g => (
                      <div 
                        key={g.id} 
                        className={`flex items-center justify-between p-2 rounded-xl transition-all border ${
                          g.done 
                            ? 'bg-green-50/40 dark:bg-green-950/10 border-green-100 dark:border-green-950/30 text-gray-400 line-through' 
                            : 'bg-gray-50/50 dark:bg-gray-900/30 border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 mr-2 overflow-hidden cursor-pointer" onClick={() => toggleGoal(g.id)}>
                          <input 
                            type="checkbox" 
                            checked={g.done}
                            onChange={() => {}}
                            className="rounded text-primary-600 focus:ring-primary-500 h-3.5 w-3.5 cursor-pointer"
                          />
                          <span className="text-xs truncate font-medium">{g.text}</span>
                        </div>
                        <button 
                          onClick={() => deleteGoal(g.id)}
                          className="p-1 hover:text-red-500 text-gray-300 dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-850 rounded-lg transition-colors cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Goal Input form */}
              <form onSubmit={handleAddGoal} className="flex gap-2 mt-4 border-t border-gray-50 dark:border-gray-800 pt-4">
                <input
                  type="text"
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="যেমন: গতি অধ্যায়ের MCQ প্র্যাকটিস করব"
                  className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
