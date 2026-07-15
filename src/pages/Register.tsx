import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, UserPlus, Mail, Lock, User, School, GraduationCap } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [className, setClassName] = useState('Class 9-10');
  const [institution, setInstitution] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !institution) {
      setError('অনুগ্রহ করে তারকা চিহ্নিত (*) সকল তথ্য পূরণ করুন।');
      return;
    }

    register(name, email, role, role === 'student' ? className : undefined, institution);
    if (role === 'student') {
      navigate('/dashboard');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#fcfcf9] dark:bg-gray-950 transition-colors duration-200">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-2xl shadow-lg text-white">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          নতুন অ্যাকাউন্ট তৈরি করুন
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          ইতিমধ্যেই অ্যাকাউন্ট আছে? <Link to="/login" className="font-bold text-primary-600 hover:underline">লগইন করুন</Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white dark:bg-gray-850 py-8 px-6 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl space-y-5">
          
          {/* Role selection tab */}
          <div className="grid grid-cols-2 gap-2 bg-gray-50 dark:bg-gray-900 p-1.5 rounded-xl border border-gray-100 dark:border-gray-800">
            <button
              onClick={() => { setRole('student'); setError(''); }}
              className={`py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${role === 'student' ? 'bg-white dark:bg-gray-800 dark:text-white text-primary-700 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
            >
              আমি শিক্ষার্থী (Student)
            </button>
            <button
              onClick={() => { setRole('teacher'); setError(''); }}
              className={`py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${role === 'teacher' ? 'bg-white dark:bg-gray-800 dark:text-white text-primary-700 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'}`}
            >
              আমি শিক্ষক (Teacher)
            </button>
          </div>

          {error && (
            <p className="text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">আপনার নাম *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">ইমেইল ঠিকানা *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="যেমন: name@gmail.com"
                />
              </div>
            </div>

            {/* Grade/Class selection (only for students) */}
            {role === 'student' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">বর্তমান শ্রেণী (Grade) *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                  </span>
                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="Class 6-8">Class 6-8 (ষষ্ঠ-অষ্টম)</option>
                    <option value="Class 9-10">Class 9-10 (SSC)</option>
                    <option value="HSC">HSC (একাদশ-দ্বাদশ)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Institution */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">শিক্ষা প্রতিষ্ঠান *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <School className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => { setInstitution(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="আপনার স্কুল বা কলেজের নাম লিখুন"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">পাসওয়ার্ড *</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="৬+ অক্ষরের পাসওয়ার্ড দিন"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
            >
              <UserPlus className="w-4 h-4" />
              <span>নিবন্ধন সম্পন্ন করুন</span>
            </button>
          </form>

        </Card>
      </div>

    </div>
  );
};
