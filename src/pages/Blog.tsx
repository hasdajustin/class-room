import React from 'react';
import { Calendar, User, ArrowRight, Bookmark } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: '২০২৬ সালের এসএসসি পরীক্ষার্থীদের পদার্থবিজ্ঞান শেষ মুহূর্তের প্রস্তুতি গাইড',
      summary: 'পদার্থবিজ্ঞানের গাণিতিক সমস্যা দ্রুত সমাধান করার ৪টি কার্যকরী টেকনিক এবং গুরুত্বপূর্ণ সৃজনশীল প্রশ্নসমূহের সাজেশন লিষ্ট।',
      date: '১৪ জুলাই, ২০২৬',
      author: 'তানভীর রহমান',
      category: 'এসএসসি প্রস্তুতি',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: 'আইসিটি এইচএসসি: সি প্রোগ্রামিং লজিক সহজে মনে রাখার টেকনিক',
      summary: 'লুপ এবং কন্ডিশনাল কন্ডিশন গুলোর জটিল প্যাঁচ চিত্রের মাধ্যমে সমাধান করার মজার উপায় নিয়ে বিস্তারিত আলোচনা।',
      date: '১২ জুলাই, ২০২৬',
      author: 'আরিফ হাসান',
      category: 'এইচএসসি প্রস্তুতি',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: 'নতুন কারিকুলাম ও আমাদের শিক্ষাদান পদ্ধতি',
      summary: 'নতুন সিলেবাসের বিজ্ঞান অনুসন্ধানী পাঠ ও অনুশীলনী বইয়ের জটিল অধ্যায়গুলো যেভাবে সমাধান করতে হবে।',
      date: '১০ জুলাই, ২০২৬',
      author: 'জোনায়েদ হোসেন',
      category: 'কারিকুলাম আপডেট',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">
          ব্লগ ও <span className="text-primary-600 dark:text-primary-400">নোটিশ</span> বোর্ড
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 font-normal">
          বোর্ড পরীক্ষার টিপস, নতুন একাডেমিক সার্কুলার এবং গুরুত্বপূর্ণ নোটিশগুলো এখানে একনজরে দেখে নিন।
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="group flex flex-col h-full bg-white dark:bg-gray-850 p-0 overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-primary-600 text-white text-[9px] font-extrabold px-2 py-1 rounded">
                {post.category}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-semibold">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-950 dark:text-white group-hover:text-primary-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="border-t border-gray-50 dark:border-gray-800 pt-4 mt-4">
                <button
                  onClick={() => alert(`"${post.title}" ব্লগটি পড়ার জন্য ধন্যবাদ! এটি একটি ডেমো পোস্ট।`)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline"
                >
                  <span>সম্পূর্ণ পড়ুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
