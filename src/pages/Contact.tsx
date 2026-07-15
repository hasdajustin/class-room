import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { Card } from '../components/common/Card';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('অনুগ্রহ করে সব তথ্য পূরণ করুন।');
      return;
    }
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-950 dark:text-white leading-tight">
          যোগাযোগ <span className="text-primary-600 dark:text-primary-400">করুন</span>
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          আপনার যেকোনো জিজ্ঞাসা, মতামত বা টেকনিক্যাল সাপোর্টের জন্য নিচে মেসেজ দিন। আমাদের টিম ২৪ ঘণ্টার মধ্যে যোগাযোগ করবে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact details */}
        <div className="md:col-span-5 space-y-6">
          <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-6">
            <h3 className="text-base font-bold text-gray-900 dark:text-white">অফিস ঠিকানা ও হেল্পলাইন</h3>
            
            <ul className="space-y-4 text-xs">
              <li className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold dark:text-white">ক্লাসরুম হেডকোয়ার্টার</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                    হাউজ ১২, ব্লক-ডি, মিরপুর-১০ গোলচত্বর সংলগ্ন,<br />মিরপুর, ঢাকা-১২১৬, বাংলাদেশ
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold dark:text-white">হেল্পলাইন (সকাল ৯টা - রাত ১০টা)</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 font-mono">+৮৮০ ১৭০০-০০০০০০</p>
                  <p className="text-gray-500 dark:text-gray-400 font-mono">+৮৮০ ১৮০০-০০০০০০</p>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold dark:text-white">ইমেইল সাপোর্ট</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 font-mono">support@classroom.com</p>
                  <p className="text-gray-500 dark:text-gray-400 font-mono">info@classroom.com</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* Simple map placeholder */}
          <div className="rounded-2xl overflow-hidden aspect-video border border-gray-100 dark:border-gray-800 shadow-inner relative">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
              alt="Map Placeholder"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center p-4">
              <span className="px-3 py-1.5 bg-white text-gray-800 text-xs font-bold rounded-lg shadow-md">
                মিরপুর-১০, ঢাকা, বাংলাদেশ
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:col-span-7">
          <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-gray-900 dark:text-white pb-2 border-b border-gray-100 dark:border-gray-800">সাপোর্ট রিকোয়েস্ট পাঠান</h3>
              
              {success && (
                <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl text-xs font-semibold flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে! হেল্পলাইন টিম শীঘ্রই যোগাযোগ করবে।</span>
                </div>
              )}

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">আপনার নাম *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">আপনার ইমেইল ঠিকানা *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="যেমন: name@gmail.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300">আপনার বার্তা / মেসেজ *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="আপনার প্রশ্ন বা মতামতটি বিস্তারিত লিখুন..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
                <span>মেসেজ পাঠান</span>
              </button>
            </form>
          </Card>
        </div>

      </div>

    </div>
  );
};
