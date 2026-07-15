import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { UploadForm } from '../../components/admin/UploadForm';
import { StudentList } from '../../components/admin/StudentList';
import { Card } from '../../components/common/Card';
import { 
  BookOpen, Users, Play, Award, Trash2, Calendar, 
  Clock, AlertCircle, PlusCircle, CheckCircle, Flame 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, courses, deleteCourse, liveClasses, addLiveClass } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Live class booking form states
  const [liveTitle, setLiveTitle] = useState('');
  const [liveTeacher, setLiveTeacher] = useState('ড. মাহফুজুর রহমান');
  const [liveDate, setLiveDate] = useState('১৫ জুলাই, ২০২৬');
  const [liveTime, setLiveTime] = useState('সন্ধ্যা ৭:৩০ মিনিট');
  const [liveSubject, setLiveSubject] = useState('পদার্থবিজ্ঞান');
  const [liveStatus, setLiveStatus] = useState<string | null>(null);

  if (!user || user.role !== 'teacher') {
    return (
      <div className="max-w-md mx-auto py-20 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">অ্যাক্সেস অনুমোদিত নয়!</h2>
        <p className="text-xs text-gray-500">এই পৃষ্ঠাটি শুধুমাত্র শিক্ষকদের জন্য সংরক্ষিত। অনুগ্রহ করে শিক্ষক অ্যাকাউন্ট দিয়ে লগইন করুন।</p>
      </div>
    );
  }

  const handleCreateLiveClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!liveTitle) {
      alert('অনুগ্রহ করে লাইভ ক্লাসের শিরোনাম দিন!');
      return;
    }

    addLiveClass({
      title: liveTitle,
      teacherName: liveTeacher,
      date: liveDate,
      time: liveTime,
      subject: liveSubject,
      status: 'upcoming'
    });

    setLiveStatus('লাইভ ক্লাস সেশনটি সফলভাবে শিডিউল করা হয়েছে!');
    setLiveTitle('');
    setTimeout(() => setLiveStatus(null), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Title */}
      <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white leading-tight">এডমিন শিক্ষক পোর্টাল</h1>
        <p className="text-xs text-gray-400 mt-1">ক্লাসরুম ডিজিটাল কনটেন্ট পাবলিশিং ও ম্যানেজমেন্ট হাব।</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Sidebar controls */}
        <div className="lg:col-span-3">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Right Side: Tab content display panels */}
        <div className="lg:col-span-9 space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-primary-600 text-white p-5 rounded-2xl shadow-sm space-y-2">
                  <BookOpen className="w-7 h-7 text-white/80" />
                  <div>
                    <h3 className="text-2xl font-black">{courses.length}টি</h3>
                    <p className="text-[10px] font-bold uppercase text-primary-100">মোট কোর্স সংখ্যা</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-850 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <Users className="w-7 h-7 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">৪ জন</h3>
                    <p className="text-[10px] font-bold uppercase text-gray-400">নিবন্ধিত শিক্ষার্থী</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-850 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-2">
                  <Play className="w-7 h-7 text-red-600" />
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">{liveClasses.length}টি</h3>
                    <p className="text-[10px] font-bold uppercase text-gray-400">শিডিউল্ড লাইভ সেশন</p>
                  </div>
                </div>
              </div>

              {/* Quick instructions guide */}
              <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-2xl space-y-3">
                <div className="flex items-center space-x-1.5 text-primary-600 font-extrabold text-sm">
                  <Flame className="w-5 h-5" />
                  <span>আসসালামু আলাইকুম, শিক্ষক ড্যাশবোর্ডে স্বাগতম!</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                  এখানে আপনি শিক্ষার্থীদের পড়াশোনার গতিশীল করতে সহজে নতুন কোর্স পাবলিশ করতে পারেন। পাশে থাকা অপশন গুলো ব্যবহার করে আপনার সাবমিট করা কোর্স তালিকা পর্যবেক্ষণ করুন বা নতুন শিক্ষার্থীদের তথ্য ও লাইভ জুম সেশন শিডিউল নিয়ন্ত্রণ করুন।
                </p>
              </Card>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-8">
              {/* Upload dynamic form */}
              <UploadForm />

              {/* Course list tracker with quick delete */}
              <div className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">বর্তমানে পাবলিশড করা কোর্স তালিকা</h3>
                
                <div className="divide-y divide-gray-50 dark:divide-gray-800">
                  {courses.map((c) => (
                    <div key={c.id} className="py-3.5 flex justify-between items-center gap-4">
                      <div className="flex items-center space-x-3.5">
                        <img
                          src={c.thumbnail}
                          alt={c.title}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 border"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-gray-950 dark:text-white">{c.title}</h4>
                          <span className="text-[10px] text-gray-400 font-semibold">{c.category} • {c.subject}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteCourse(c.id)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg shrink-0 transition-all cursor-pointer"
                        title="কোর্স মুছুন"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <StudentList />
          )}

          {activeTab === 'live' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Form to book live class */}
              <div className="md:col-span-5">
                <Card className="bg-white dark:bg-gray-850 p-6 border border-gray-100 dark:border-gray-800 rounded-3xl">
                  <form onSubmit={handleCreateLiveClass} className="space-y-4">
                    <div className="border-b border-gray-50 dark:border-gray-800 pb-3">
                      <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center space-x-1.5">
                        <PlusCircle className="w-4.5 h-4.5 text-primary-500" />
                        <span>লাইভ ক্লাস শিডিউল করুন</span>
                      </h3>
                    </div>

                    {liveStatus && (
                      <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-xl text-xs font-semibold flex items-center space-x-1.5">
                        <CheckCircle className="w-4.5 h-4.5" />
                        <span>{liveStatus}</span>
                      </div>
                    )}

                    {/* Subject info */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">বিষয়</label>
                      <input
                        type="text"
                        value={liveSubject}
                        onChange={(e) => setLiveSubject(e.target.value)}
                        className="w-full p-2 bg-gray-50 dark:bg-gray-800 border rounded-lg text-xs"
                        placeholder="যেমন: পদার্থবিজ্ঞান বা আইসিটি"
                      />
                    </div>

                    {/* Live Title */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">লাইভ ক্লাসের শিরোনাম *</label>
                      <input
                        type="text"
                        value={liveTitle}
                        onChange={(e) => setLiveTitle(e.target.value)}
                        className="w-full p-2 bg-gray-50 dark:bg-gray-800 border rounded-lg text-xs"
                        placeholder="যেমন: এসএসসি ভৌত রাশি লাইভ ক্লাস"
                      />
                    </div>

                    {/* Schedule Date */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">তারিখ</label>
                      <input
                        type="text"
                        value={liveDate}
                        onChange={(e) => setLiveDate(e.target.value)}
                        className="w-full p-2 bg-gray-50 dark:bg-gray-800 border rounded-lg text-xs"
                      />
                    </div>

                    {/* Schedule Time */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase">সময়</label>
                      <input
                        type="text"
                        value={liveTime}
                        onChange={(e) => setLiveTime(e.target.value)}
                        className="w-full p-2 bg-gray-50 dark:bg-gray-800 border rounded-lg text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-xs shadow-md transition-all cursor-pointer"
                    >
                      শিডিউল ও পাবলিশ করুন
                    </button>
                  </form>
                </Card>
              </div>

              {/* Currently scheduled lists */}
              <div className="md:col-span-7">
                <Card className="bg-white dark:bg-gray-850 p-5 border border-gray-100 dark:border-gray-800 rounded-2xl">
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">পাবলিশড হওয়া শিডিউল তালিকা</h3>
                  
                  <div className="space-y-3">
                    {liveClasses.map((c) => (
                      <div 
                        key={c.id} 
                        className="p-3 bg-gray-50/50 dark:bg-gray-900/30 rounded-xl border border-gray-100 dark:border-gray-850 text-xs flex justify-between items-center gap-3"
                      >
                        <div className="space-y-1">
                          <p className="font-bold text-gray-950 dark:text-white">{c.title}</p>
                          <div className="flex flex-wrap gap-2 text-[9px] text-gray-400">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{c.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{c.time}</span>
                            </span>
                          </div>
                        </div>

                        <span className={`px-2 py-0.5 text-[8px] font-extrabold rounded uppercase shrink-0 ${c.status === 'live' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-50 text-blue-700'}`}>
                          {c.status === 'live' ? 'লাইভ' : 'আসন্ন'}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
