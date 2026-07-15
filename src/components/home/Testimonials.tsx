import React from 'react';
import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../../data/mockData';
import { Card } from '../common/Card';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            শিক্ষার্থী ও অভিভাবকদের <span className="text-primary-600 dark:text-primary-400">মতামত</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-normal">
            হাজারো শিক্ষার্থী ও অভিভাবক ক্লাসরুমকে সেরা ও নির্ভরযোগ্য মনে করছেন। তাদের অভিজ্ঞতা নিচে দেওয়া হলো।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mockTestimonials.map((t) => (
            <Card key={t.id} className="relative p-6 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-200/50 dark:text-gray-800/50" />
              
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex text-amber-400 space-x-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic font-normal">
                  "{t.quote}"
                </p>

                {/* Profile detail */}
                <div className="flex items-center space-x-3 pt-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">{t.class} • {t.institution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
