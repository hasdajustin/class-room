import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BoardExamCountdown } from '../components/home/BoardExamCountdown';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { CoursesPreview } from '../components/home/CoursesPreview';
import { Testimonials } from '../components/home/Testimonials';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: 'ক্লাসরুমের ক্লাসগুলো কি সম্পূর্ণ ফ্রি?',
      a: 'আমাদের প্ল্যাটফর্মে অনেকগুলো অধ্যায়ভিত্তিক বেসিক ক্লাস, পিডিএফ লেকচার শিট এবং প্র্যাকটিস কুইজ সম্পূর্ণ ফ্রি। তবে বিশেষ গোছানো গাইডলাইন এবং পূর্ণাঙ্গ সিলেবাস প্রস্তুতির জন্য সামান্য সাবস্ক্রিপশন ফি দিয়ে প্রিমিয়াম কোর্স কিনতে হবে।'
    },
    {
      q: 'নতুন কারিকুলাম অনুযায়ী কি ক্লাস নেওয়া হয়?',
      a: 'হ্যাঁ! ষষ্ঠ থেকে নবম শ্রেণীর জন্য জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)-এর সর্বশেষ নতুন কারিকুলামের আলোকে এক্সপেরিমেন্টাল এবং অ্যাক্টিভিটি-বেইজড ক্লাস তৈরি করা হয়েছে।'
    },
    {
      q: 'আমি কীভাবে আমার অগ্রগতি (Progress) ট্র্যাক করব?',
      a: 'তুমি একটি ফ্রি অ্যাকাউন্ট খুলে যেকোনো কোর্সে জয়েন করলেই তোমার জন্য একটি ব্যক্তিগত স্টুডেন্ট ড্যাশবোর্ড তৈরি হবে। সেখানে চ্যাপ্টার কমপ্লিশন, কুইজ স্কোর হিস্ট্রি এবং অর্জিত পয়েন্ট লাইভ গ্রাফের মাধ্যমে দেখতে পাবে।'
    },
    {
      q: 'শিক্ষকদের সাথে সরাসরি কথা বলার কোনো সুযোগ আছে?',
      a: 'হ্যাঁ, আমাদের প্রতিটি কোর্সের শিক্ষার্থীদের জন্য আছে সাপ্তাহিক লাইভ প্রশ্নোত্তর সেশন এবং ডিসকাশন ফোরাম। ফোরামে যেকোনো কঠিন টপিকের ছবি বা টেক্সট পোস্ট করলে আমাদের ডেডিকেটেড মেন্টররা উত্তর দিয়ে থাকেন।'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <HeroSection />

      {/* Signature Board Exam Countdown & Goal Tracker */}
      <BoardExamCountdown />

      {/* Features Overview */}
      <FeaturesSection />

      {/* Course Previews */}
      <CoursesPreview />

      {/* Testimonials */}
      <Testimonials />

      {/* Quick FAQ Section */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              সাধারণ <span className="text-primary-600 dark:text-primary-400">জিজ্ঞাসা</span> (FAQ)
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ক্লাসরুম সম্পর্কে সচরাচর জানতে চাওয়া কিছু প্রশ্নের দ্রুত উত্তর।
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <Card 
                  key={idx} 
                  className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 p-0 overflow-hidden cursor-pointer"
                  onClick={() => setOpenFAQ(isOpen ? null : idx)}
                >
                  <div className="p-5 flex justify-between items-center">
                    <div className="flex items-center space-x-3 mr-3">
                      <HelpCircle className="w-5 h-5 text-primary-500 shrink-0" />
                      <span className="text-sm font-bold text-gray-950 dark:text-white leading-snug">{faq.q}</span>
                    </div>
                    <span className="text-gray-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-gray-50 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/faq" 
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline"
            >
              <span>সকল প্রশ্নোত্তর দেখুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 sm:py-16 bg-primary-600 dark:bg-primary-750 text-white text-center rounded-3xl max-w-6xl mx-4 sm:mx-auto my-8 sm:my-12 px-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-2xl -z-10" />
        
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-black leading-snug">তোমার পড়াশোনাকে আরও সহজ করতে আজই যুক্ত হও!</h2>
          <p className="text-sm text-primary-100 leading-relaxed font-normal">
            হাজারো শিক্ষার্থীর সাথে যোগ দিয়ে পড়াশোনায় আনো পূর্ণ গতি। ফ্রি কুইজ খেলে বা ডেমো ভিডিও লেকচার দেখে আজই তোমার প্রথম কদম বাড়াও।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link 
              to="/register" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-700 hover:bg-gray-50 font-bold rounded-2xl shadow-lg transition-all"
            >
              ফ্রি অ্যাকাউন্ট খোলো
            </Link>
            <Link 
              to="/courses" 
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-700 hover:bg-primary-800 text-white border border-primary-500/50 font-bold rounded-2xl transition-all"
            >
              আমাদের কোর্সসমূহ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
