import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';

export const UploadForm: React.FC = () => {
  const { addCourse } = useAuth();
  
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'Class 6-8' | 'Class 9-10' | 'HSC'>('Class 9-10');
  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('0');
  const [isPremium, setIsPremium] = useState(false);
  const [teacherName, setTeacherName] = useState('ড. মাহফুজুর রহমান');
  const [thumbnail, setThumbnail] = useState('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600');

  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !subtitle || !description || !subject) {
      setStatus({ type: 'error', message: 'অনুগ্রহ করে সব তারকা চিহ্নিত (*) তথ্য পূরণ করুন।' });
      return;
    }

    addCourse({
      title,
      subtitle,
      description,
      category,
      subject,
      teacherName,
      teacherRole: 'প্রধান মেন্টর, ক্লাসরুম',
      teacherAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      thumbnail,
      isPremium,
      price: isPremium ? Number(price) : undefined
    });

    setStatus({ type: 'success', message: 'কোর্সটি সফলভাবে তৈরি হয়েছে এবং লাইভ ক্যাটালগে যুক্ত হয়েছে!' });
    
    // Clear form
    setTitle('');
    setSubtitle('');
    setDescription('');
    setSubject('');
    setPrice('0');
    setIsPremium(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-gray-850 p-6 rounded-2xl border border-gray-100 dark:border-gray-850">
      <div className="border-b border-gray-100 dark:border-gray-800 pb-3 mb-1">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">নতুন কোর্স আপলোড করুন</h3>
        <p className="text-xs text-gray-400">এই ফর্মটি পূরণ করে কোর্স সাবমিট করলে তা শিক্ষার্থীদের নিকট প্রকাশ পাবে।</p>
      </div>

      {status && (
        <div className={`p-4 rounded-xl flex items-center space-x-2 text-xs font-semibold ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-150' : 'bg-red-50 text-red-700 border border-red-150'}`}>
          {status.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span>{status.message}</span>
        </div>
      )}

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Course Title */}
        <div className="space-y-1.5 col-span-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">কোর্সের শিরোনাম (Course Title) *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="যেমন: এসএসসি পদার্থবিজ্ঞান ১০০% প্রস্তুতি"
          />
        </div>

        {/* Subtitle */}
        <div className="space-y-1.5 col-span-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">কোর্সের সাবটাইটেল / সারসংক্ষেপ *</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="কোর্সটির মূল আকর্ষণ এক লাইনে লিখুন"
          />
        </div>

        {/* Subject Category */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">শ্রেণী / ক্যাটাগরি *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="Class 6-8">Class 6-8 (ষষ্ঠ-অষ্টম)</option>
            <option value="Class 9-10">Class 9-10 (SSC)</option>
            <option value="HSC">HSC (একাদশ-দ্বাদশ)</option>
          </select>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">নির্দিষ্ট বিষয় (Subject Name) *</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="যেমন: পদার্থবিজ্ঞান বা আইসিটি"
          />
        </div>

        {/* Price status */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">কোর্সের ধরন</label>
          <div className="flex items-center space-x-4 p-2">
            <label className="flex items-center space-x-1.5 text-xs text-gray-700 dark:text-gray-300 cursor-pointer">
              <input
                type="radio"
                checked={!isPremium}
                onChange={() => setIsPremium(false)}
                className="accent-primary-600"
              />
              <span>ফ্রি কোর্স</span>
            </label>
            <label className="flex items-center space-x-1.5 text-xs text-gray-700 dark:text-gray-300 cursor-pointer">
              <input
                type="radio"
                checked={isPremium}
                onChange={() => setIsPremium(true)}
                className="accent-primary-600"
              />
              <span>পেইড / প্রিমিয়াম</span>
            </label>
          </div>
        </div>

        {/* Price amount */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">কোর্স ফি (৳ টাকা)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={!isPremium}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 disabled:opacity-50"
            placeholder="০"
          />
        </div>

        {/* Image thumbnail URL */}
        <div className="space-y-1.5 col-span-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300"> থাম্বনেইল ছবি (Thumbnail Image URL)</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        {/* Description */}
        <div className="space-y-1.5 col-span-1 sm:col-span-2">
          <label className="text-xs font-bold text-gray-700 dark:text-gray-300">বিস্তারিত বিবরণ (Description) *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="এই কোর্সের মাধ্যমে শিক্ষার্থীরা কী শিখবে এবং কাদের জন্য এটি প্রযোজ্য..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center space-x-1.5 cursor-pointer transition-all"
      >
        <UploadCloud className="w-4 h-4" />
        <span>কোর্স পাবলিশ করুন</span>
      </button>
    </form>
  );
};
