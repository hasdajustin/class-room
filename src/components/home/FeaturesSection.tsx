import React from 'react';
import { Video, BookOpen, BrainCircuit, Users, Award, LayoutDashboard } from 'lucide-react';
import { Card } from '../common/Card';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'ভিডিও লেকচার প্লেয়ার',
      description: 'অভিজ্ঞ মেন্টরদের দ্বারা সাজানো প্রতিটি অধ্যায়ের টপিক-ভিত্তিক ভিডিও যা কঠিন কনসেপ্ট সহজে বোঝাবে।',
      icon: Video,
      color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
    },
    {
      title: 'ডাউনলোডযোগ্য হ্যান্ডনোট',
      description: 'প্রতিটি ক্লাসের সাথে থাকছে চমৎকার ডিজাইন করা গোছানো লেকচার শিট এবং পিডিএফ হ্যান্ডনোট যা পরীক্ষার শেষ মুহূর্তে কাজে দেবে।',
      icon: BookOpen,
      color: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400'
    },
    {
      title: 'ইন্টারেক্টিভ কুইজ ও MCQ',
      description: 'লেকচার শেষ করে সাথে সাথেই দিতে পারো MCQ কুইজ। সঠিক উত্তর ও উত্তরের ব্যাখ্যা পেয়ে নিজেকে করো সম্পূর্ণ প্রস্তুত।',
      icon: BrainCircuit,
      color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'
    },
    {
      title: 'লাইভ ক্লাস ও মেন্টরিং',
      description: 'পরীক্ষার আগমুহূর্তে সরাসরি শিক্ষকদের কাছে প্রশ্ন করে সমাধান নেওয়ার জন্য আছে সাপ্তাহিক লাইভ ও জুমিং সেশন।',
      icon: Users,
      color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
    },
    {
      title: 'স্টুডেন্ট প্রোগ্রেস ও ড্যাশবোর্ড',
      description: 'তোমার পড়াশোনার অগ্রগতি রেকর্ড করা থাকবে গ্রাফ চার্টের মাধ্যমে। কমপ্লিট চ্যাপ্টার ও কুইজ স্কোর দেখে বুঝে নাও পরবর্তী করণীয়।',
      icon: LayoutDashboard,
      color: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'
    },
    {
      title: 'লিডারবোর্ড ও গ্যামিফিকেশন',
      description: 'ভিডিও দেখলে এবং কুইজে ভালো করলে জিতে নাও পয়েন্ট ও আকর্ষনীয় ব্যাজ। সহপাঠীদের সাথে লড়াই করে হও কুইজ উইনার!',
      icon: Award,
      color: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 dark:text-white tracking-tight">
            কেন তুমি <span className="text-primary-600 dark:text-primary-400">ক্লাসরুম</span> বেছে নেবে?
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 font-normal">
            আমরা শুধু মুখস্থ করানোয় বিশ্বাস করি না। ভিজ্যুয়াল লার্নিং আর আধুনিক কুইজ ট্র্যাকিংয়ের মাধ্যমে পড়াশোনাকে করেছি আকর্ষণীয় ও কার্যকর।
          </p>
        </div>

        {/* Features Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <Card 
                key={index} 
                className="hover:-translate-y-1 hover:shadow-lg hover:border-gray-200/50 dark:hover:border-gray-800 p-6 flex flex-col items-start space-y-4"
              >
                <div className={`p-3 rounded-2xl ${feat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">{feat.description}</p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
