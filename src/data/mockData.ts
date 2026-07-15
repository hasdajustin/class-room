import { Course, Quiz, LiveClass, ForumPost, Notification } from '../types';

export const mockCourses: Course[] = [
  {
    id: 'course-ssc-physics',
    title: 'এসএসসি পদার্থবিজ্ঞান (SSC Physics)',
    subtitle: 'অধ্যায় ১ থেকে ১৪ পর্যন্ত সম্পূর্ণ সিলেবাসের সহজ সমাধান',
    description: 'এই কোর্সে আমরা এসএসসি পদার্থবিজ্ঞানের জটিল থিওরি, গাণিতিক সমস্যা এবং প্র্যাক্টিক্যাল ডেমোনস্ট্রেশন অত্যন্ত সহজ ভাষায় আলোচনা করেছি। প্রতিটি অধ্যায় শেষে বোর্ড পরীক্ষার সৃজনশীল ও MCQ প্রশ্নের সমাধান রয়েছে।',
    category: 'Class 9-10',
    subject: 'পদার্থবিজ্ঞান (Physics)',
    teacherName: 'তানভীর রহমান',
    teacherRole: 'বিএসসি, বুয়েট (১০+ বছরের অভিজ্ঞতা)',
    teacherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    enrolledCount: 12450,
    thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600',
    isPremium: false,
    chapters: [
      {
        id: 'phy-ch1',
        title: 'অধ্যায় ১: ভৌত রাশি ও পরিমাপ (Physical Quantities and Measurement)',
        lessons: [
          {
            id: 'phy-l1',
            title: '১.১ ভৌত রাশি এবং এর পরিমাপের একক',
            duration: '১২:৪৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Using placeholders
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'phy-l2',
            title: '১.২ পরিমাপের যন্ত্রসমূহ: স্লাইড ক্যালিপার্স ও স্ক্রু-গজ',
            duration: '১৮:৩০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          }
        ]
      },
      {
        id: 'phy-ch2',
        title: 'অধ্যায় ২: গতি (Motion)',
        lessons: [
          {
            id: 'phy-l3',
            title: '২.১ স্থিতি এবং গতি, বিভিন্ন প্রকার গতি',
            duration: '১৫:২০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'phy-l4',
            title: '২.২ গতির সমীকরণসমূহ এবং গ্রাফ বিশ্লেষণ',
            duration: '২২:১৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          }
        ]
      },
      {
        id: 'phy-ch3',
        title: 'অধ্যায় ৩: বল (Force)',
        lessons: [
          {
            id: 'phy-l5',
            title: '৩.১ নিউটনের গতির প্রথম সূত্র ও জড়তা',
            duration: '১৪:১০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          },
          {
            id: 'phy-l6',
            title: '৩.২ ভরবেগ ও নিউটনের দ্বিতীয় সূত্র (F = ma)',
            duration: '২০:০৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-hsc-ict',
    title: 'এইচএসসি আইসিটি (HSC ICT Masterclass)',
    subtitle: 'সংখ্যা পদ্ধতি, ডিজিটাল ডিভাইস ও ওয়েব ডিজাইন',
    description: 'এইচএসসি সিলেবাসের ৩য়, ৪র্থ ও ৫ম অধ্যায়ের মতো কঠিন বিষয়গুলো সহজ প্র্যাক্টিক্যাল ভিজ্যুয়ালাইজেশনের মাধ্যমে শেখানো হবে। HTML, CSS এবং C Programming-এর বাস্তব প্রজেক্ট থাকবে এই কোর্সে।',
    category: 'HSC',
    subject: 'আইসিটি (ICT)',
    teacherName: 'আরিফ হাসান',
    teacherRole: 'সফটওয়্যার ইঞ্জিনিয়ার ও মেন্টর',
    teacherAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    enrolledCount: 8900,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    isPremium: true,
    price: 999,
    chapters: [
      {
        id: 'ict-ch3',
        title: 'অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস',
        lessons: [
          {
            id: 'ict-l1',
            title: '৩.১ সংখ্যা পদ্ধতির রূপান্তর (Decimal, Binary, Octal, Hex)',
            duration: '২৫:১২',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'ict-l2',
            title: '৩.২ লজিক গেট (AND, OR, NOT, NAND, NOR)',
            duration: '২০:৪৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          }
        ]
      },
      {
        id: 'ict-ch5',
        title: 'অধ্যায় ৫: সি প্রোগ্রামিং (C Programming)',
        lessons: [
          {
            id: 'ict-l3',
            title: '৫.১ সি প্রোগ্রামিংয়ের বেসিক স্ট্রাকচার ও ডেটা টাইপ',
            duration: '১৯:৩০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          },
          {
            id: 'ict-l4',
            title: '৫.২ লুপ কন্ট্রোল স্টেটমেন্ট (For, While Loop)',
            duration: '২৪:১৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-ssc-math',
    title: 'এসএসসি সাধারণ গণিত (SSC General Math)',
    subtitle: 'বীজগণিত, জ্যামিতি ও ত্রিকোণমিতির শতভাগ প্রস্তুতি',
    description: 'গণিতের ভীতি দূর করার জন্য বিশেষভাবে ডিজাইন করা এই কোর্স। শর্টকাট টেকনিক, সৃজনশীল সমাধান এবং প্রতিটি টপিকের বাস্তবসম্মত উদাহরণ সহকারে পুরো গণিত বই শেষ করা হবে।',
    category: 'Class 9-10',
    subject: 'গণিত (Mathematics)',
    teacherName: 'সাবিহা ইয়াসমিন',
    teacherRole: 'বিএসসি, এমএসসি, ঢাকা বিশ্ববিদ্যালয়',
    teacherAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    enrolledCount: 15600,
    thumbnail: 'https://images.unsplash.com/photo-1453733190148-c44698c26588?auto=format&fit=crop&q=80&w=600',
    isPremium: false,
    chapters: [
      {
        id: 'math-ch2',
        title: 'অধ্যায় ২: সেট ও ফাংশন (Set and Function)',
        lessons: [
          {
            id: 'math-l1',
            title: '২.১ সেটের সংজ্ঞা, প্রকারভেদ ও ভেনচিত্র প্রকাশ',
            duration: '১৫:৪০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'math-l2',
            title: '২.২ ডোমেন, রেঞ্জ এবং ক্রোমজোড় সংক্রান্ত সমাধান',
            duration: '১৮:৫০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          }
        ]
      },
      {
        id: 'math-ch9',
        title: 'অধ্যায় ৯: ত্রিকোণমিতিক অনুপাত (Trigonometry)',
        lessons: [
          {
            id: 'math-l3',
            title: '৯.১ ত্রিকোণমিতিক কোণ ও সূত্রের প্রমাণ',
            duration: '২২:১০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'math-l4',
            title: '৯.২ ত্রিকোণমিতিক মানসমূহ মুখস্থ করার সহজ টেকনিক',
            duration: '১৬:১৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-class8-science',
    title: 'অষ্টম শ্রেণী বিজ্ঞান (Class 8 Science)',
    subtitle: 'নতুন কারিকুলাম অনুযায়ী বিজ্ঞান অনুসন্ধানী পাঠ ও অনুশীলন বই',
    description: 'অষ্টম শ্রেণীর শিক্ষার্থীদের জন্য নতুন কারিকুলাম অনুযায়ী মজার মজার অ্যানিমেশন ও এক্সপেরিমেন্টের মাধ্যমে বিজ্ঞানের জটিল টপিকগুলো শেখানো হবে।',
    category: 'Class 6-8',
    subject: 'বিজ্ঞান (Science)',
    teacherName: 'জোনায়েদ হোসেন',
    teacherRole: 'বিজ্ঞান গবেষক ও শিক্ষক',
    teacherAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.7,
    enrolledCount: 6500,
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
    isPremium: false,
    chapters: [
      {
        id: 'sci8-ch1',
        title: 'অধ্যায় ১: গতি ও বল',
        lessons: [
          {
            id: 'sci8-l1',
            title: '১.১ নিউটনের ১ম সূত্র এবং জড়তার খেলা',
            duration: '১২:১৫',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          },
          {
            id: 'sci8-l2',
            title: '১.২ গতি ও ত্বরণ সংক্রান্ত বাস্তব পরীক্ষা',
            duration: '১৪:৪০',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            pdfUrl: '#',
            isPremium: false
          }
        ]
      }
    ]
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz-phy-ch1',
    courseId: 'course-ssc-physics',
    courseTitle: 'এসএসসি পদার্থবিজ্ঞান',
    title: 'অধ্যায় ১: ভৌত রাশি ও পরিমাপ কুইজ',
    pointsAwarded: 50,
    questions: [
      {
        id: 'q1-1',
        question: 'নিচের কোনটি মৌলিক রাশি?',
        options: ['বেগ', 'বল', 'সময়', 'কাজ'],
        correctAnswerIndex: 2,
        explanation: 'সময় একটি মৌলিক রাশি। অন্য রাশিগুলো সময়, দৈর্ঘ্য ও ভরের উপর নির্ভরশীল লব্ধ রাশি।'
      },
      {
        id: 'q1-2',
        question: 'স্লাইড ক্যালিপার্সের প্রধান স্কেলের ১ ভাগের চেয়ে ভার্নিয়ার স্কেলের ১ ভাগ কতটুকু ছোট তাকে কি বলা হয়?',
        options: ['ভার্নিয়ার ধ্রুবক (Vernier Constant)', 'ভার্নিয়ার সমপাতন (Vernier Coincidence)', 'যান্ত্রিক ত্রুটি (Mechanical Error)', 'লঘিষ্ঠ গণন'],
        correctAnswerIndex: 0,
        explanation: 'ভার্নিয়ার ধ্রুবক (Vernier Constant) হলো প্রধান স্কেলের ক্ষুদ্রতম এক ভাগের চেয়ে ভার্নিয়ার স্কেলের এক ভাগ কতটুকু ছোট তার পরিমাপ।'
      },
      {
        id: 'q1-3',
        question: 'দীপ্তন তীব্রতার (Luminous Intensity) এসআই (SI) একক কোনটি?',
        options: ['লুমেন (Lumen)', 'ক্যান্ডেলা (Candela)', 'লাক্স (Lux)', 'ওয়াট (Watt)'],
        correctAnswerIndex: 1,
        explanation: 'দীপ্তন তীব্রতার এসআই একক হলো ক্যান্ডেলা (Candela)।'
      }
    ]
  },
  {
    id: 'quiz-ict-ch3',
    courseId: 'course-hsc-ict',
    courseTitle: 'এইচএসসি আইসিটি',
    title: 'অধ্যায় ৩: সংখ্যা পদ্ধতি কুইজ',
    pointsAwarded: 80,
    questions: [
      {
        id: 'q3-1',
        question: 'হেক্সাডেসিমেল সংখ্যা পদ্ধতির ভিত্তি (Base) কত?',
        options: ['২', '৮', '১০', '১৬'],
        correctAnswerIndex: 3,
        explanation: 'হেক্সাডেসিমেল সংখ্যা পদ্ধতিতে ০-৯ পর্যন্ত ১০টি এবং A-F পর্যন্ত ৬টি মোট ১৬টি চিহ্ন ব্যবহৃত হয়। তাই এর বেস ১৬।'
      },
      {
        id: 'q3-2',
        question: 'বাইনারি সংখ্যা ১০১১ এর দশমিক সমতুল্য মান কত?',
        options: ['৯', '১০', '১১', '১২'],
        correctAnswerIndex: 2,
        explanation: '1011 = (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 8 + 0 + 2 + 1 = 11।'
      },
      {
        id: 'q3-3',
        question: 'কোন লজিক গেটকে "সর্বজনীন গেট" (Universal Gate) বলা হয়?',
        options: ['AND Gate', 'NAND Gate', 'XOR Gate', 'OR Gate'],
        correctAnswerIndex: 1,
        explanation: 'NAND এবং NOR গেট দিয়ে সব ধরনের মৌলিক গেট তৈরি করা যায় বলে এদের সর্বজনীন গেট বলা হয়।'
      }
    ]
  }
];

export const mockLiveClasses: LiveClass[] = [
  {
    id: 'live-1',
    title: 'পদার্থবিজ্ঞান: এসএসসি সৃজনশীল প্রশ্নের সমাধান হ্যাকস',
    subject: 'পদার্থবিজ্ঞান (Physics)',
    teacherName: 'তানভীর রহমান',
    date: '২০২৬-০৭-১৫',
    time: 'রাত ৮:০০',
    status: 'live',
    joinUrl: '#'
  },
  {
    id: 'live-2',
    title: 'আইসিটি: সি প্রোগ্রামিং এর লুপ লজিক ক্লিয়ারিং সেশন',
    subject: 'আইসিটি (ICT)',
    teacherName: 'আরিফ হাসান',
    date: '২০২৬-০৭-১৬',
    time: 'বিকাল ৫:৩০',
    status: 'upcoming',
    joinUrl: '#'
  },
  {
    id: 'live-3',
    title: 'গণিত: ত্রিকোণমিতি অধ্যায়ের জটিল সমাধান',
    subject: 'গণিত (Mathematics)',
    teacherName: 'সাবিহা ইয়াসমিন',
    date: '২০২৬-০৭-১৪',
    time: 'সকাল ১০:০০',
    status: 'completed',
    joinUrl: '#'
  }
];

export const mockForumPosts: ForumPost[] = [
  {
    id: 'post-1',
    title: 'ভার্নিয়ার সমপাতন পরিমাপ করার সময় ত্রুটি কীভাবে এড়ানো যায়?',
    content: 'আমি যখন স্লাইড ক্যালিপার্স দিয়ে বেলনাকৃতি কোনো দণ্ডের ব্যাস পরিমাপ করি, তখন প্রতিবার ভার্নিয়ার সমপাতনে সামান্য অমিল দেখা যায়। চোখের লম্বন ত্রুটি বা পার্সপেক্টিভ কীভাবে সংশোধন করতে পারি?',
    authorName: 'ফাহিম আহমেদ',
    authorRole: 'student',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    createdAt: '২০২৬-০৭-১৩T১০:৩০:০০Z',
    likes: 12,
    tags: ['পদার্থবিজ্ঞান', 'এসএসসি', 'স্লাইড-ক্যালিপার্স'],
    replies: [
      {
        id: 'reply-1',
        content: 'ভার্নিয়ার ধ্রুবক দেখার সময় চোখকে সবসময় রিডিং বিন্দুর একদম সোজাসুজি উল্লম্বভাবে রাখতে হবে। এছাড়া ৩/৪ বার পরিমাপ নিয়ে তার গড় (Average) নিলে এই র্যান্ডম ত্রুটি অনেক কমে আসে।',
        authorName: 'তানভীর রহমান',
        authorRole: 'teacher',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        createdAt: '২০২৬-০৭-১৩T১১:১৫:০০Z'
      }
    ]
  },
  {
    id: 'post-2',
    title: 'C programming এ nested loop রান করতে স্পিড কমে যাওয়ার সমাধান?',
    content: 'আমার ৩ লেয়ারের একটা nested loop রান করতে গিয়ে কোড স্লো হয়ে যাচ্ছে। Time complexity কমানোর কোনো উপায় আছে কি?',
    authorName: 'সানজিদা ইসলাম',
    authorRole: 'student',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    createdAt: '২০২৬-০৭-১২T১৪:২০:০০Z',
    likes: 8,
    tags: ['ICT', 'HSC', 'C-Programming'],
    replies: [
      {
        id: 'reply-2',
        content: '৩টি নেস্টেড লুপ মানেই O(N^3) টাইম কমপ্লেক্সিটি। চেষ্টা করো কোনো লজিক বা ডাইনামিক প্রোগ্রামিং (DP) অথবা হ্যাশ ম্যাপ ব্যবহার করে এটিকে O(N^2) বা O(N log N) এ নামিয়ে আনতে।',
        authorName: 'আরিফ হাসান',
        authorRole: 'teacher',
        authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
        createdAt: '২০২৬-০৭-১২T১৫:০০:০০Z'
      }
    ]
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'লাইভ ক্লাস শুরু হচ্ছে!',
    message: 'তানভীর রহমান স্যারের "পদার্থবিজ্ঞান সৃজনশীল সমাধান" লাইভ ক্লাসটি একটু পরেই শুরু হচ্ছে। এখনই জয়েন করো!',
    createdAt: '২০২৬-০৭-১৪T১১:০০:০০Z',
    isRead: false,
    type: 'alert'
  },
  {
    id: 'notif-2',
    title: 'নতুন কুইজ যুক্ত করা হয়েছে',
    message: 'আইসিটি কোর্সের সংখ্যা পদ্ধতি অধ্যায়ের ৩য় কুইজটি এখন লাইভ। তোমার জ্ঞান যাচাই করো!',
    createdAt: '২০২৬-০৭-১৩T০৯:১৫:০০Z',
    isRead: true,
    type: 'success'
  },
  {
    id: 'notif-3',
    title: 'কোর্স আপডেট',
    message: 'সাধারণ গণিত কোর্সে নতুন একটি ভিডিও লেকচার যুক্ত করা হয়েছে।',
    createdAt: '২০২৬-০৭-১২T১২:০০:০০Z',
    isRead: true,
    type: 'info'
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'তানভীর হাসান',
    class: 'এইচএসসি পরীক্ষার্থী',
    institution: 'নটর ডেম কলেজ, ঢাকা',
    quote: 'এইচএসসি ২য় পত্রের তাপগতিবিদ্যা (Thermodynamics) আর স্থির তড়িতের গাণিতিক সমস্যা নিয়ে সবসময় কনফিউশনে ভুগতাম। তানভীর স্যারের ভিজ্যুয়াল লেকচার আর ফোরামের ইনস্ট্যান্ট ফিডব্যাক কাজে লাগিয়ে টেস্ট পেপারের সব জটিল গাণিতিক সৃজনশীল আয়ত্ত করেছি এবং ফিজিক্সে গোল্ডেন A+ পেয়েছি!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: 'তাসনিম সুলতানা',
    class: 'এসএসসি পরীক্ষার্থী',
    institution: 'ভিকারুননিসা নূন স্কুল অ্যান্ড কলেজ, ঢাকা',
    quote: 'নতুন কারিকুলামের বিজ্ঞান ও গণিতের কঠিন থিওরিগুলো একদম জলের মতো সহজ লেগেছে। বিশেষ করে স্লাইড ক্যালিপার্সের সূক্ষ্ম হিসাব ও বলবিদ্যার জড়তার সূত্রের ভিডিও অ্যানিমেশনগুলো চমৎকার ছিল। কুইজ প্র্যাকটিস করায় বোর্ড পরীক্ষার এমসিকিউ নিয়ে কোনো ভয় ছিল না!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];
