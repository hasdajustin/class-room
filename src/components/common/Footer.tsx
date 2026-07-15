import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-16 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Intro */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-extrabold text-primary-400">
                ক্লাসরুম
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              বাংলাদেশের সেরা ও সহজতম ই-লার্নিং প্ল্যাটফর্ম। ষষ্ঠ থেকে দ্বাদশ শ্রেণী পর্যন্ত সম্পূর্ণ একাডেমিক গাইডলাইন, লাইভ ক্লাস, নোট এবং কুইজ প্র্যাকটিস এখানে এক জায়গায়।
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg text-white transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-red-600 rounded-lg text-white transition-colors" title="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-500 rounded-lg text-white transition-colors" title="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-primary-400 transition-colors">সকল কোর্সসমূহ</Link></li>
              <li><Link to="/live-class" className="hover:text-primary-400 transition-colors">লাইভ ক্লাস শিডিউল</Link></li>
              <li><Link to="/forum" className="hover:text-primary-400 transition-colors">ডিসকাশন ফোরাম</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-400 transition-colors">সাবস্ক্রিপশন প্ল্যান</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">আমাদের সম্পর্কে</Link></li>
            </ul>
          </div>

          {/* Subject Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">শ্রেণীসমূহ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses?category=Class 6-8" className="hover:text-primary-400 transition-colors">ষষ্ঠ - অষ্টম শ্রেণী</Link></li>
              <li><Link to="/courses?category=Class 9-10" className="hover:text-primary-400 transition-colors">নবম - দশম শ্রেণী (SSC)</Link></li>
              <li><Link to="/courses?category=HSC" className="hover:text-primary-400 transition-colors">একাদশ - দ্বাদশ শ্রেণী (HSC)</Link></li>
              <li><Link to="/courses" className="hover:text-primary-400 transition-colors">বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-400 transition-colors">ফ্রি নোট ও সাজেশন</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">যোগাযোগ করুন</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>মিরপুর-১০, ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>support@classroom.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright and legal */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© ২০২৬ <a href="https://github.com/hasdajustin" className="hover:underline" target="_blank" rel="noopener noreferrer">Matheus Justin Hasda</a></p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">ব্যবহারের শর্তাবলী</a>
            <a href="#" className="hover:underline">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:underline">রিফান্ড পলিসি</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
