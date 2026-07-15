import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogIn, Mail, Lock, ShieldCheck, HelpCircle } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [error, setError] = useState('');

  const handleDemoLogin = (selectedRole: 'student' | 'teacher') => {
    if (selectedRole === 'student') {
      login('asif@gmail.com', 'student');
      navigate('/dashboard');
    } else {
      login('mahfuz@classroom.com', 'teacher');
      navigate('/admin');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('অনুগ্রহ করে ইমেইল এবং পাসওয়ার্ড দুটিই লিখুন।');
      return;
    }

    // Connect context
    login(email, role);
    if (role === 'student') {
      navigate('/dashboard');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#fcfcf9] dark:bg-gray-950 transition-colors duration-200">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-2xl shadow-lg text-white">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          ক্লাসরুমে প্রবেশ করুন
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          আপনার অ্যাকাউন্ট নেই? <Link to="/register" className="font-bold text-primary-600 hover:underline">নতুন অ্যাকাউন্ট তৈরি করুন</Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white dark:bg-gray-850 py-8 px-6 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl space-y-6">
          
          {/* Role selector tabs */}
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
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">ইমেইল ঠিকানা</label>
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

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300">পাসওয়ার্ড</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>লগইন করুন</span>
            </button>
          </form>

          {/* Quick Demo Access (Highly polished) */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-5 space-y-3">
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-extrabold flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
              <span>অন-ক্লিক ডেমো অ্যাক্সেস (টেস্টিং গাইড)</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleDemoLogin('student')}
                className="py-2.5 bg-blue-50/50 hover:bg-blue-50 dark:bg-blue-950/20 dark:hover:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold rounded-xl text-[10px] text-center border border-blue-100 dark:border-blue-900/40 cursor-pointer transition-all"
              >
                স্টুডেন্ট ডেমো লগইন
              </button>
              <button
                onClick={() => handleDemoLogin('teacher')}
                className="py-2.5 bg-green-50/50 hover:bg-green-50 dark:bg-green-950/20 dark:hover:bg-green-950/40 text-green-700 dark:text-green-300 font-bold rounded-xl text-[10px] text-center border border-green-100 dark:border-green-900/40 cursor-pointer transition-all"
              >
                শিক্ষক ডেমো লগইন
              </button>
            </div>
          </div>

        </Card>
      </div>

    </div>
  );
};
