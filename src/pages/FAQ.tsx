import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../components/common/Card';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const list = [
    {
      q: 'মোবাইল থেকে কি ক্লাস করা যাবে?',
      a: 'হ্যাঁ! আমাদের প্ল্যাটফর্মটি ১০০% মোবাইল রেসপনসিভ করে ডিজাইন করা হয়েছে। বাংলাদেশের যেকোনো প্রান্ত থেকে সাধারণ 3G/4G ইন্টারনেট কানেকশন ব্যবহার করে মোবাইল ব্রাউজারে খুব সহজে ক্লাস ও কুইজে অংশ নেওয়া যাবে।'
    },
    {
      q: 'কোর্সের পিডিএফ শিটগুলো কি অফলাইনে প্রিন্ট করা সম্ভব?',
      a: 'হ্যাঁ, প্রতিটি অধ্যায়ের লেকচার শিট পিডিএফ ফরম্যাটে থাকে। আপনি ডাউনলোড আইকনে ক্লিক করে ফাইলটি আপনার ডিভাইসে সেভ করে যেকোনো কম্পিউটার দোকান থেকে প্রিন্ট করে পড়াশোনা করতে পারবেন।'
    },
    {
      q: 'পেমেন্ট কীভাবে করতে হবে?',
      a: 'আমাদের প্ল্যাটফর্মে বিকাশের (bKash), রকেট (Rocket) বা নগদের (Nagad) মাধ্যমে সহজে পেমেন্ট করা যাবে। প্রিমিয়াম সাবস্ক্রিপশন বাটন সিলেক্ট করলে সরাসরি পেমেন্ট গেটওয়ে প্যানেল ওপেন হবে।'
    },
    {
      q: 'অভিভাবকরা কীভাবে সন্তানের প্রোগ্রেস মনিটর করবেন?',
      a: 'অভিভাবকগণ শিক্ষার্থীর লগইন ডিটেইল ব্যবহার করে সরাসরি স্টুডেন্ট ড্যাশবোর্ড ভিজিট করতে পারবেন। সেখানে গ্রাফিকাল প্রোগ্রেস বার, সাম্প্রতিক দেওয়া কুইজ সমূহের মার্কস হিস্ট্রি এবং অর্জিত পয়েন্ট বিস্তারিত দেখা যাবে।'
    },
    {
      q: 'মডেল টেস্ট কি বোর্ড পরীক্ষার অনুরুপ হয়?',
      a: 'হ্যাঁ! নবম-দশম ও একাদশ-দ্বাদশ শ্রেণীর মডেল টেস্টগুলোতে বোর্ড পরীক্ষার স্ট্যান্ডার্ড সৃজনশীল এবং বহুনির্বাচনী প্রশ্ন সেট করা থাকে, যাতে শিক্ষার্থীরা নির্দিষ্ট সময়ের মধ্যে পরীক্ষা শেষ করার চমৎকার অভিজ্ঞতা লাভ করতে পারে।'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">
          সচরাচর <span className="text-primary-600 dark:text-primary-400">জিজ্ঞাসিত</span> প্রশ্নসমূহ
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          ক্লাসরুম প্ল্যাটফর্মের কোর্স, ক্লাস এবং কুইজ সংক্রান্ত যেকোনো প্রশ্নের দ্রুত সমাধান এখানে পাবেন।
        </p>
      </div>

      <div className="space-y-4">
        {list.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <Card 
              key={idx} 
              className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 p-0 overflow-hidden cursor-pointer"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
            >
              <div className="p-5 flex justify-between items-center">
                <div className="flex items-center space-x-3 mr-3">
                  <HelpCircle className="w-5 h-5 text-primary-500 shrink-0" />
                  <span className="text-sm font-bold text-gray-950 dark:text-white leading-relaxed">{faq.q}</span>
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
    </div>
  );
};
