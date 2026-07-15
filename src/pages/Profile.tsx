import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/common/Card';
import { User, Mail, School, GraduationCap, Award, CheckCircle, Shield } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [institution, setInstitution] = useState(user?.institution || '');
  const [className, setClassName] = useState(user?.class || 'Class 9-10');
  const [board, setBoard] = useState(user?.board || 'Dhaka');
  const [success, setSuccess] = useState(false);

  if (!user) {
    return (
      <div className="max-w-md mx-auto py-20 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">প্রোফাইল দেখতে লগইন করুন</h2>
        <p className="text-xs text-gray-500 mt-2">অনুগ্রহ করে লগইন পেজে গিয়ে আপনার অ্যাকাউন্টে সাইন-ইন করুন।</p>
      </div>
    );
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !institution) {
      return;
    }

    updateUserProfile(name, className, institution, board);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const boardsList = [
    { value: 'Dhaka', label: 'ঢাকা বোর্ড (Dhaka Board)' },
    { value: 'Rajshahi', label: 'রাজশাহী বোর্ড (Rajshahi Board)' },
    { value: 'Comilla', label: 'কুমিল্লা বোর্ড (Comilla Board)' },
    { value: 'Jessore', label: 'যশোর বোর্ড (Jessore Board)' },
    { value: 'Chittagong', label: 'চট্টগ্রাম বোর্ড (Chittagong Board)' },
    { value: 'Barisal', label: 'বরিশাল বোর্ড (Barisal Board)' },
    { value: 'Sylhet', label: 'সিলেট বোর্ড (Sylhet Board)' },
    { value: 'Dinajpur', label: 'দিনাজপুর বোর্ড (Dinajpur Board)' },
    { value: 'Mymensingh', label: 'ময়মনসিংহ বোর্ড (Mymensingh Board)' },
    { value: 'Madrasah', label: 'মাদ্রাসা বোর্ড (Madrasah Board)' },
    { value: 'Technical', label: 'কারিগরি বোর্ড (Technical Board)' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center sm:text-left space-y-1">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">প্রোফাইল সেটিংস</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">ব্যক্তিগত প্রোফাইল তথ্য, শিক্ষা প্রতিষ্ঠান, বোর্ড এবং ক্লাস পরিবর্তন করুন।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 space-y-5">
          <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-2xl text-center space-y-5 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-primary-600 text-white font-black text-3xl flex items-center justify-center mx-auto shadow-md">
              {user.name[0]}
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-950 dark:text-white">{user.name}</h3>
              <p className="text-xs text-gray-400">{user.email}</p>
              <div className="inline-flex items-center space-x-1 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 rounded-full text-[10px] text-gray-600 dark:text-gray-300 font-semibold mt-1">
                <Shield className="w-3.5 h-3.5 text-primary-500" />
                <span>{user.role === 'student' ? 'শিক্ষার্থী' : 'শিক্ষক'}</span>
              </div>
            </div>

            <div className="border-t border-gray-50 dark:border-gray-800 pt-4 grid grid-cols-2 gap-2">
              <div className="text-left bg-gray-50/50 dark:bg-gray-900/40 p-2.5 rounded-xl">
                <span className="text-[10px] text-gray-400 block font-semibold">অর্জিত পয়েন্ট</span>
                <span className="text-base font-black text-amber-600 dark:text-amber-500">{user.points} PTS</span>
              </div>
              <div className="text-left bg-gray-50/50 dark:bg-gray-900/40 p-2.5 rounded-xl">
                <span className="text-[10px] text-gray-400 block font-semibold">শিক্ষা বোর্ড</span>
                <span className="text-xs font-bold text-gray-800 dark:text-white leading-none">
                  {boardsList.find(b => b.value === user.board)?.label.split(' ')[0] || 'ঢাকা'}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-8">
          <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
            <form onSubmit={handleSave} className="space-y-4">
              <h3 className="text-base font-bold text-gray-950 dark:text-white border-b border-gray-50 dark:border-gray-800 pb-3">তথ্য এডিট করুন</h3>
              
              {success && (
                <div className="p-3.5 bg-green-50 text-green-700 border border-green-200 rounded-xl text-xs font-semibold flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>আপনার প্রোফাইল সফলভাবে আপডেট করা হয়েছে!</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">সম্পূর্ণ নাম *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="আপনার নাম"
                  />
                </div>
              </div>

              <div className="space-y-1.5 opacity-60">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">ইমেইল ঠিকানা (পরিবর্তনযোগ্য নয়)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </span>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-150 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">শ্রেণী (Class) *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                    </span>
                    <select
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="Class 6-8">Class 6-8 (ষষ্ঠ-অষ্টম)</option>
                      <option value="Class 9-10">Class 9-10 (SSC)</option>
                      <option value="HSC">HSC (একাদশ-দ্বাদশ)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 dark:text-gray-300">শিক্ষা বোর্ড *</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 text-gray-400 animate-pulse" />
                    </span>
                    <select
                      value={board}
                      onChange={(e) => setBoard(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      {boardsList.map((b) => (
                        <option key={b.value} value={b.value}>{b.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">স্কুল / কলেজ *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <School className="h-4 w-4 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="আপনার শিক্ষা প্রতিষ্ঠান"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                প্রোফাইল সংরক্ষণ করুন
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};
