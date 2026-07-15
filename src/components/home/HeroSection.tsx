import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Sparkles, BookOpen, GraduationCap, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#fcfcf9] dark:bg-gray-950 pt-12 pb-16 md:py-24 transition-colors duration-200">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-green-100/30 dark:bg-green-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-gray-900 dark:text-white leading-[1.25] tracking-tight">
              স্মার্ট বাংলাদেশের <br className="hidden sm:inline" />
              <span className="text-primary-600 dark:text-primary-400">
                অনলাইন লার্নিং
              </span> প্ল্যাটফর্ম
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              শ্রেণী ৬ থেকে দ্বাদশ (SSC & HSC) শিক্ষার্থীদের জন্য সম্পূর্ণ নতুন কারিকুলাম ও বোর্ড সিলেবাসের উপর ভিত্তি করে তৈরি অধ্যায়ভিত্তিক ভিডিও লেকচার, লাইভ ক্লাস, ডাউনলোডযোগ্য পিডিএফ নোট এবং সেলফ-অ্যাসেসমেন্ট কুইজ।
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-2xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all text-center flex items-center justify-center space-x-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>আজই পড়া শুরু করো</span>
              </Link>
              <Link
                to="/courses?quiz=true"
                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white font-semibold rounded-2xl border border-gray-200 dark:border-gray-700 transition-all text-center flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 text-primary-500 fill-primary-500" />
                <span>ফ্রি কুইজ খেলো</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 border-t border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-primary-600">২৫,০০০+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">সক্রিয় শিক্ষার্থী</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-green-600">১৫০+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">কোর্স লেকচার</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">৯৯%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">সন্তুষ্টির হার</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-primary-500/20 dark:bg-primary-500/10 rounded-3xl blur transition duration-1000"></div>
              
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 p-4">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                  alt="Online Classes"
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                />
                
                {/* Float tag 1 */}
                <div className="absolute top-8 left-8 bg-white/90 dark:bg-gray-850/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 hidden sm:flex items-center space-x-2">
                  <div className="p-1.5 bg-primary-500 rounded-lg text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold dark:text-white">লাইভ ক্লাস</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">প্রতিদিন সরাসরি মেন্টরিং</p>
                  </div>
                </div>

                {/* Float tag 2 */}
                <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-850/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 hidden sm:flex items-center space-x-2">
                  <div className="p-1.5 bg-green-500 rounded-lg text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold dark:text-white">ফ্রি হ্যান্ডনোট</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">অধ্যায়ভিত্তিক পিডিএফ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
