import React from 'react';
import { Mail, GraduationCap, School, Award, CheckCircle } from 'lucide-react';

interface StudentType {
  id: string;
  name: string;
  email: string;
  class: string;
  institution: string;
  points: number;
  status: 'active' | 'inactive';
}

export const StudentList: React.FC = () => {
  const students: StudentType[] = [
    {
      id: 'student-1',
      name: 'আসিফ ইকবাল',
      email: 'asif@gmail.com',
      class: 'Class 9-10 (SSC)',
      institution: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
      points: 120,
      status: 'active'
    },
    {
      id: 'student-2',
      name: 'ফাহিম আহমেদ',
      email: 'fahim@gmail.com',
      class: 'Class 9-10 (SSC)',
      institution: 'নটর ডেম কলেজ, ঢাকা',
      points: 80,
      status: 'active'
    },
    {
      id: 'student-3',
      name: 'সানজিদা ইসলাম',
      email: 'sanjida@gmail.com',
      class: 'HSC',
      institution: 'ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ',
      points: 210,
      status: 'active'
    },
    {
      id: 'student-4',
      name: 'তাহসিন রহমান',
      email: 'tahsin@gmail.com',
      class: 'Class 6-8',
      institution: 'মিরপুর ক্যান্টনমেন্ট পাবলিক স্কুল',
      points: 40,
      status: 'active'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">নিবন্ধিত শিক্ষার্থীর তালিকা</h3>
          <p className="text-xs text-gray-400">আপনার প্ল্যাটফর্মের শিক্ষার্থীদের তথ্য, পয়েন্ট এবং কার্যক্রমের সংক্ষিপ্ত বিবরণ।</p>
        </div>
        <span className="px-2.5 py-1 text-xs bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 font-bold rounded-lg">
          মোট শিক্ষার্থী: {students.length}জন
        </span>
      </div>

      <div className="overflow-x-auto text-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <th className="p-4">নাম ও ইমেইল</th>
              <th className="p-4">শ্রেণী (Grade)</th>
              <th className="p-4">শিক্ষা প্রতিষ্ঠান</th>
              <th className="p-4">অর্জিত পয়েন্ট</th>
              <th className="p-4">স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                {/* Name */}
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-primary-50 dark:bg-primary-950 flex items-center justify-center font-bold text-primary-600 dark:text-primary-300">
                      {student.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">{student.name}</p>
                      <span className="text-[10px] text-gray-400 flex items-center space-x-1 mt-0.5">
                        <Mail className="w-3.5 h-3.5" />
                        <span>{student.email}</span>
                      </span>
                    </div>
                  </div>
                </td>

                {/* Grade Class */}
                <td className="p-4 text-xs font-medium text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span>{student.class}</span>
                  </div>
                </td>

                {/* Institution */}
                <td className="p-4 text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">
                  <div className="flex items-center space-x-1">
                    <School className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{student.institution}</span>
                  </div>
                </td>

                {/* Points */}
                <td className="p-4">
                  <div className="flex items-center space-x-1 text-xs font-bold text-yellow-600">
                    <Award className="w-4.5 h-4.5" />
                    <span>{student.points} PTS</span>
                  </div>
                </td>

                {/* Status */}
                <td className="p-4 text-xs">
                  <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 dark:bg-green-950/20 dark:text-green-400 font-semibold flex items-center space-x-1 w-max">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>সক্রিয়</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
