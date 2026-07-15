import React from 'react';
import { Check, Info, ShieldCheck, Zap, Star } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Pricing: React.FC = () => {
  const handlePurchase = (planName: string) => {
    alert(`"${planName}" সাবস্ক্রিপশনটি কিনতে আগ্রহ প্রকাশ করায় ধন্যবাদ! বর্তমানে এটি একটি মক ডেমো পেমেন্ট। API কানেক্ট করার পর আপনার রিয়াল পেমেন্ট গেটওয়ে যুক্ত হবে।`);
  };

  const plans = [
    {
      name: 'ফ্রি প্ল্যান (Free Study)',
      price: '০',
      period: 'আজীবন ফ্রি',
      description: 'বেসিক কনসেপ্ট ক্লিয়ারিং ও ডেমো লেকচার দেখার জন্য আদর্শ।',
      features: [
        'প্রতিটি বিষয়ের ১ম অধ্যায়ের ক্লাস সম্পূর্ণ ফ্রি',
        'ফ্রি লেকচার পিডিএফ হ্যান্ডনোট',
        'প্রতিটি ফ্রি অধ্যায়ের সেলফ-কুইজ',
        'ডিসকাশন ফোরামে পোস্ট দেখার অ্যাক্সেস'
      ],
      cta: 'ফ্রি শুরু করো',
      popular: false,
      color: 'border-gray-200 dark:border-gray-800'
    },
    {
      name: 'প্রিমিয়াম অল-পাস (HSC & SSC)',
      price: '৪৯৯',
      period: 'মাসিক সাবস্ক্রিপশন',
      description: 'এসএসসি বা এইচএসসি যেকোনো একটি শ্রেণীর সকল বিষয়ের পূর্ণাঙ্গ কোর্স ও ফাইল অ্যাক্সেস।',
      features: [
        'শ্রেণীর সকল বিষয়ের সকল অধ্যায়ের ভিডিও লেকচার',
        'ডাউনলোডযোগ্য সুপার সাজেশান ও প্রিমিয়াম শিট',
        'বোর্ড পরীক্ষার অনুরূপ আনলিমিটেড মডেল টেস্ট',
        'ফোরামে মেন্টরদের ডিরেক্ট ডাউট সলভিং',
        'লাইভ ক্লাসে সরাসরি জুম সেশন জয়েনিং'
      ],
      cta: 'সাবস্ক্রাইব করো',
      popular: true,
      color: 'border-primary-500 ring-2 ring-primary-500/20'
    },
    {
      name: 'ওয়ান-টাইম ওয়ান সাবজেক্ট',
      price: '৯৯৯',
      period: 'এককালীন (Life-time)',
      description: 'নির্দিষ্ট যেকোনো একটি বিশেষ কোর্সের সম্পূর্ণ লাইফ-টাইম সিলেবাস কভার সুবিধা।',
      features: [
        'নির্দিষ্ট কোর্সের আজীবন ভিডিও ও ফাইল অ্যাক্সেস',
        'অধ্যায়ভিত্তিক ১০০% সৃজনশীল সমাধান',
        'সরাসরি কোর্স শিক্ষকের সাথে মেন্টরিং',
        'কোর্সের সকল ফিউচার আপডেট ফ্রি',
        'সফল সমাপ্তিতে ডিজিটাল সার্টিফিকেট'
      ],
      cta: 'কোর্সটি কিনুন',
      popular: false,
      color: 'border-gray-200 dark:border-gray-800'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">
          সহজ <span className="text-primary-600 dark:text-primary-400">সাবস্ক্রিপশন</span> প্ল্যান
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          মানসম্মত শিক্ষা যেন সবার নাগালের মধ্যে থাকে। কোনো লুকানো চার্জ নেই, যেকোনো সময় এক ক্লিকে সাবস্ক্রিপশন বাতিল করতে পারবে।
        </p>
      </div>

      {/* Plans list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <Card 
            key={idx} 
            className={`flex flex-col justify-between bg-white dark:bg-gray-850 p-6 rounded-3xl border shadow-sm relative ${plan.color}`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow flex items-center space-x-1">
                <Star className="w-3 h-3 fill-white" />
                <span>সবচেয়ে জনপ্রিয়</span>
              </span>
            )}

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-normal leading-relaxed">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-black">৳</span>
                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                <span className="ml-1 text-xs text-gray-400 font-semibold">/ {plan.period}</span>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800" />

              {/* Features checklist */}
              <ul className="space-y-3.5 text-xs">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit button */}
            <button
              onClick={() => handlePurchase(plan.name)}
              className={`
                w-full mt-8 py-3 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer
                ${plan.popular 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-500/15' 
                  : 'bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white hover:bg-gray-200 border border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {plan.cta}
            </button>
          </Card>
        ))}
      </div>

      {/* Refund Guarantee strip */}
      <div className="bg-primary-50/50 dark:bg-primary-950/20 border border-primary-100/50 dark:border-primary-950 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center space-x-3 text-sm">
          <ShieldCheck className="w-8 h-8 text-primary-600 shrink-0" />
          <div>
            <p className="font-bold text-gray-900 dark:text-white">৩ দিনের শতভাগ ক্যাশব্যাক গ্যারান্টি!</p>
            <p className="text-xs text-gray-400 font-normal">কোর্স কিনে বা সাবস্ক্রাইব করে কোনো কারণে ভালো না লাগলে ৩ দিনের মধ্যে রিফান্ড রিকোয়েস্ট করতে পারবে।</p>
          </div>
        </div>
        <button 
          onClick={() => alert('রিফান্ড নীতি সম্পর্কে আরও জানতে support@classroom.com ঠিকানায় ইমেইল করুন।')}
          className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-xs font-bold rounded-xl text-gray-700 dark:text-white shrink-0 transition-colors"
        >
          রিফান্ড পলিসি
        </button>
      </div>

    </div>
  );
};
