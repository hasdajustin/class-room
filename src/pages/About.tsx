import React from 'react';
import { Target, Users2, ShieldCheck, Milestone, BookOpen } from 'lucide-react';
import { Card } from '../components/common/Card';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      
      {/* Intro section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">
          আমাদের <span className="text-primary-600 dark:text-primary-400">লক্ষ্য ও উদ্দেশ্য</span>
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 font-normal leading-relaxed">
          আমরা মনে করি মানসম্মত শিক্ষা প্রতিটি শিক্ষার্থীর মৌলিক অধিকার। বাংলাদেশের যেকোনো প্রান্ত থেকে যেন শিক্ষার্থীরা সহজে, নামমাত্র মূল্যে বা সম্পূর্ণ ফ্রিতে সেরা মেন্টরদের গাইডলাইন পেতে পারে, সেই লক্ষ্য নিয়েই ক্লাসরুমের যাত্রা শুরু।
        </p>
      </div>

      {/* Visual illustration box */}
      <div className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[21/9] border border-gray-100 dark:border-gray-800 shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200"
          alt="Learning Classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-950/60 flex items-end p-6 md:p-10">
          <div className="text-white max-w-md space-y-1">
            <h3 className="text-xl font-bold">ক্লাসরুম অনলাইন লার্নিং</h3>
            <p className="text-xs text-gray-200">মিরপুর-১০, ঢাকা থেকে পরিচালিত একটি ডিজিটাল এডুকেশন উদ্যোগ।</p>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">আমাদের মূল নীতিসমূহ</h2>
          <p className="text-xs text-gray-400 mt-1">যার উপর ভিত্তি করে আমরা প্রতিনিয়ত কাজ করে যাচ্ছি।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center text-center space-y-4 bg-white dark:bg-gray-850">
            <div className="p-3 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-full">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">সহজ ব্যাখ্যা (Clarity)</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
              কঠিন সমীকরণ বা সূত্রের জটিল প্যাঁচ ভেঙে বাস্তব উদাহরণের মাধ্যমে সহজ ভাষায় শিক্ষার্থীদের বুঝিয়ে দেওয়া।
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-4 bg-white dark:bg-gray-850">
            <div className="p-3 bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">পরীক্ষামূলক শিখন (Method)</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
              শুধু পরীক্ষার জন্য পড়া নয়, বরং বাস্তবসম্মত পরীক্ষা বা ডেমো ভিডিও দেখিয়ে বিজ্ঞানের সৌন্দর্য ফুটিয়ে তোলা।
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-4 bg-white dark:bg-gray-850">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400 rounded-full">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">সবার জন্য শিক্ষা (Equity)</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
              শ্রেণী বৈষম্য দূরে ঠেলে গ্রাম থেকে শহর—যেকোনো স্কুল বা মাদ্রাসার শিক্ষার্থীরা যেন একই স্ট্যান্ডার্ড সেবা পায়।
            </p>
          </Card>
        </div>
      </div>

      {/* Teachers / Founders summary */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-1 text-xs font-bold text-primary-600 bg-primary-50 dark:bg-primary-950/40 px-2.5 py-1 rounded-full">
            <Milestone className="w-3.5 h-3.5" />
            <span>আমাদের পথচলা</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
            দেশের শীর্ষস্থানীয় মেন্টরদের সরাসরি ক্লাস ও গাইডলাইন প্যানেল
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            ক্লাসরুমের প্রতিটি কোর্স বুয়েট, ঢাকা বিশ্ববিদ্যালয় এবং প্রখ্যাত মেডিকেল কলেজের কৃতী শিক্ষার্থীদের দ্বারা রিভিউ এবং মডারেট করা হয়। শিক্ষার্থীদের মেধা বিকাশে এবং বোর্ড পরীক্ষায় শতভাগ এ+ পেতে আমরা প্রতিনিয়ত মানসম্মত লেকচার ও প্র্যাকটিস শিট আপডেট করছি।
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-850 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-2">
            <h4 className="text-2xl font-black text-primary-600">১০+</h4>
            <p className="text-xs font-bold dark:text-white">অভিজ্ঞ মেন্টর</p>
            <p className="text-[10px] text-gray-400">বুয়েট ও ঢাবির টিম</p>
          </div>
          <div className="bg-white dark:bg-gray-850 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-2">
            <h4 className="text-2xl font-black text-green-600">৫০+</h4>
            <p className="text-xs font-bold dark:text-white">সৃজনশীল শিট</p>
            <p className="text-[10px] text-gray-400">ডাউনলোডযোগ্য নোট</p>
          </div>
        </div>
      </div>

    </div>
  );
};
