import React from 'react';
import { Course } from '../../types';
import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from '../common/Card';

interface NotesDownloadProps {
  course: Course;
}

export const NotesDownload: React.FC<NotesDownloadProps> = ({ course }) => {
  // Extract all lessons that have notes/pdfs
  const noteLessons = course.chapters.flatMap(ch => 
    ch.lessons.filter(l => l.pdfUrl).map(l => ({
      chapterTitle: ch.title,
      ...l
    }))
  );

  const handleDownload = (title: string) => {
    alert(`"${title}" লেকচার শিটটির পিডিএফ ডাউনলোড শুরু হয়েছে!`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">লেকচার শীট ও কন্টেন্ট তালিকা</h3>
        <span className="text-xs text-gray-400">মোট ফাইল: {noteLessons.length}টি</span>
      </div>

      {noteLessons.length === 0 ? (
        <div className="text-center py-10 bg-white dark:bg-gray-850 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">এই কোর্সে এখনও কোনো পিডিএফ হ্যান্ডনোট যুক্ত করা হয়নি।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {noteLessons.map((note) => (
            <Card key={note.id} className="bg-white dark:bg-gray-850 p-4 border border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-start space-x-3 mr-3 min-w-0">
                <div className="p-2.5 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                    {note.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 truncate mt-0.5">{note.chapterTitle}</p>
                  <p className="text-[9px] font-semibold text-primary-600 font-mono mt-0.5">PDF • ১.৫ MB</p>
                </div>
              </div>

              <button
                onClick={() => handleDownload(note.title)}
                className="p-2 bg-gray-50 hover:bg-primary-50 dark:bg-gray-800 dark:hover:bg-primary-950/20 text-gray-500 hover:text-primary-600 rounded-xl transition-all"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
