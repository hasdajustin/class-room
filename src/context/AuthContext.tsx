import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Course, Quiz, LiveClass, ForumPost, Notification, Badge, QuizScore } from '../types';
import { mockCourses, mockLiveClasses, mockForumPosts, mockNotifications } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  courses: Course[];
  liveClasses: LiveClass[];
  forumPosts: ForumPost[];
  notifications: Notification[];
  login: (email: string, role: 'student' | 'teacher' | 'admin', name?: string, className?: string, institution?: string) => void;
  register: (name: string, email: string, role: 'student' | 'teacher' | 'admin', className?: string, institution?: string) => void;
  logout: () => void;
  updateUserProfile: (name: string, className: string, institution: string, board?: string) => void;
  enrollInCourse: (courseId: string) => void;
  completeLesson: (courseId: string, chapterId: string, lessonId: string) => void;
  addQuizScore: (quizId: string, quizTitle: string, score: number, totalQuestions: number) => void;
  addForumPost: (title: string, content: string, tags: string[]) => void;
  addForumReply: (postId: string, content: string) => void;
  toggleLikeForumPost: (postId: string) => void;
  addCourse: (course: Omit<Course, 'id' | 'rating' | 'enrolledCount' | 'chapters'>) => void;
  addChapterToCourse: (courseId: string, chapterTitle: string) => void;
  addLessonToChapter: (courseId: string, chapterId: string, lessonTitle: string, duration: string, isPremium: boolean) => void;
  addLiveClass: (title: string, subject: string, date: string, time: string, status: 'upcoming' | 'live') => void;
  markNotificationRead: (id: string) => void;
  clearNotifications: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultStudent: User = {
  id: 'student-1',
  name: 'আসিফ ইকবাল',
  email: 'asif@gmail.com',
  role: 'student',
  class: 'Class 9-10',
  institution: 'ঢাকা রেসিডেনসিয়াল মডেল কলেজ',
  board: 'Dhaka',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
  points: 120,
  badges: [
    {
      id: 'badge-welcome',
      title: 'প্রথম পদক্ষেপ',
      description: 'ক্লাসরুম প্ল্যাটফর্মে প্রথম অ্যাকাউন্ট তৈরি করার জন্য অর্জিত।',
      iconName: 'Award',
      unlockedAt: new Date().toLocaleDateString('bn-BD')
    }
  ],
  enrolledCourses: ['course-ssc-physics'],
  quizScores: [
    {
      quizId: 'quiz-phy-ch1',
      quizTitle: 'ভৌত রাশি ও পরিমাপ কুইজ',
      score: 2,
      totalQuestions: 3,
      takenAt: '২০২৬-০৭-১২'
    }
  ],
  completedChapters: ['phy-l1']
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : defaultStudent;
  });

  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : mockCourses;
  });

  const [liveClasses, setLiveClasses] = useState<LiveClass[]>(() => {
    const saved = localStorage.getItem('liveClasses');
    return saved ? JSON.parse(saved) : mockLiveClasses;
  });

  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => {
    const saved = localStorage.getItem('forumPosts');
    return saved ? JSON.parse(saved) : mockForumPosts;
  });

  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : mockNotifications;
  });

  // Sync to localstorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('liveClasses', JSON.stringify(liveClasses));
  }, [liveClasses]);

  useEffect(() => {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
  }, [forumPosts]);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const login = (email: string, role: 'student' | 'teacher' | 'admin', name?: string, className?: string, institution?: string) => {
    const loggedInUser: User = {
      id: `user-${Date.now()}`,
      name: name || (role === 'student' ? 'অভিভাবক/শিক্ষার্থী' : role === 'teacher' ? 'ড. মাহফুজুর রহমান' : 'সুপার এডমিন'),
      email,
      role,
      class: className || (role === 'student' ? 'Class 9-10' : undefined),
      institution: institution || (role === 'student' ? 'ঢাকা কলেজ' : 'ক্লাসরুম ইনস্টিটিউট'),
      avatar: role === 'student' 
        ? 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150' 
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      points: role === 'student' ? 50 : 0,
      badges: role === 'student' ? [
        {
          id: 'badge-welcome',
          title: 'স্বাগতম মেম্বার',
          description: 'সফলভাবে লগইন করার জন্য অর্জিত।',
          iconName: 'User',
          unlockedAt: new Date().toLocaleDateString('bn-BD')
        }
      ] : [],
      enrolledCourses: role === 'student' ? ['course-ssc-physics'] : [],
      quizScores: [],
      completedChapters: []
    };
    setUser(loggedInUser);
    
    // Send success notification
    addNotification('লগইন সফল!', `${loggedInUser.name} হিসেবে আপনি সফলভাবে প্রবেশ করেছেন।`, 'success');
  };

  const register = (name: string, email: string, role: 'student' | 'teacher' | 'admin', className?: string, institution?: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role,
      class: className,
      institution,
      avatar: role === 'student' 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150' 
        : 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      points: role === 'student' ? 100 : 0,
      badges: role === 'student' ? [
        {
          id: 'badge-welcome',
          title: 'নতুন দিগন্ত',
          description: 'রেজিস্ট্রেশন সম্পন্ন করার জন্য অর্জিত ব্যাজ।',
          iconName: 'Compass',
          unlockedAt: new Date().toLocaleDateString('bn-BD')
        }
      ] : [],
      enrolledCourses: [],
      quizScores: [],
      completedChapters: []
    };
    setUser(newUser);
    addNotification('নিবন্ধন সফল!', `ক্লাসরুমে আপনাকে স্বাগতম, ${name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
  };

  const enrollInCourse = (courseId: string) => {
    if (!user) return;
    if (user.enrolledCourses.includes(courseId)) return;

    setUser(prev => {
      if (!prev) return null;
      const updatedCourses = [...prev.enrolledCourses, courseId];
      return {
        ...prev,
        enrolledCourses: updatedCourses,
        points: prev.points + 20 // 20 points for enrolling
      };
    });

    const courseName = courses.find(c => c.id === courseId)?.title || 'কোর্স';
    addNotification('কোর্সে এনরোল সম্পন্ন', `আপনি সফলভাবে "${courseName}" কোর্সে যুক্ত হয়েছেন। +২০ পয়েন্ট!`, 'success');
  };

  const completeLesson = (courseId: string, chapterId: string, lessonId: string) => {
    if (!user) return;
    if (user.completedChapters.includes(lessonId)) return;

    setUser(prev => {
      if (!prev) return null;
      const updated = [...prev.completedChapters, lessonId];
      
      // Points allocation
      let addedPoints = 10;
      let newBadges = [...prev.badges];
      
      // Unlock a badge if completing 3 lessons
      if (updated.length === 3) {
        const explorerBadge: Badge = {
          id: 'badge-explorer',
          title: 'মনোযোগী ছাত্র',
          description: '৩টি ভিডিও লেকচার সম্পূর্ণ সম্পন্ন করার জন্য বিশেষ ব্যাজ।',
          iconName: 'BookOpen',
          unlockedAt: new Date().toLocaleDateString('bn-BD')
        };
        newBadges.push(explorerBadge);
        addedPoints += 50;
      }

      return {
        ...prev,
        completedChapters: updated,
        points: prev.points + addedPoints,
        badges: newBadges
      };
    });

    addNotification('লেকচার সম্পন্ন!', 'লেকচারটি সম্পূর্ণ দেখার জন্য ১০ পয়েন্ট অর্জন করেছ!', 'success');
  };

  const addQuizScore = (quizId: string, quizTitle: string, score: number, totalQuestions: number) => {
    if (!user) return;

    const newScore: QuizScore = {
      quizId,
      quizTitle,
      score,
      totalQuestions,
      takenAt: new Date().toISOString().split('T')[0]
    };

    setUser(prev => {
      if (!prev) return null;
      const updatedScores = [newScore, ...prev.quizScores.filter(q => q.quizId !== quizId)];
      
      // Awarding points: 10 per correct answer, 50 bonus for full marks
      const gainedPoints = (score * 15) + (score === totalQuestions ? 50 : 0);
      let newBadges = [...prev.badges];

      if (score === totalQuestions && !prev.badges.some(b => b.id === 'badge-quiz-champ')) {
        const champBadge: Badge = {
          id: 'badge-quiz-champ',
          title: 'কুইজ কিং',
          description: 'যেকোনো কুইজে ১০০% সঠিক উত্তর দেওয়ার কৃতিত্ব।',
          iconName: 'Zap',
          unlockedAt: new Date().toLocaleDateString('bn-BD')
        };
        newBadges.push(champBadge);
      }

      return {
        ...prev,
        quizScores: updatedScores,
        points: prev.points + gainedPoints,
        badges: newBadges
      };
    });

    addNotification('কুইজ সম্পন্ন!', `"${quizTitle}"-এ আপনার স্কোর: ${score}/${totalQuestions}!`, 'info');
  };

  const addForumPost = (title: string, content: string, tags: string[]) => {
    if (!user) return;
    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      title,
      content,
      authorName: user.name,
      authorRole: user.role,
      authorAvatar: user.avatar,
      createdAt: new Date().toISOString(),
      likes: 0,
      tags,
      replies: []
    };
    setForumPosts(prev => [newPost, ...prev]);
    addNotification('প্রশ্ন পোস্ট করা হয়েছে', 'আপনার প্রশ্নটি ফোরামে পোস্ট করা হয়েছে। শিক্ষক দ্রুত উত্তর দেবেন।', 'success');
  };

  const addForumReply = (postId: string, content: string) => {
    if (!user) return;
    setForumPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [
            ...post.replies,
            {
              id: `reply-${Date.now()}`,
              content,
              authorName: user.name,
              authorRole: user.role,
              authorAvatar: user.avatar,
              createdAt: new Date().toISOString()
            }
          ]
        };
      }
      return post;
    }));
  };

  const toggleLikeForumPost = (postId: string) => {
    setForumPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1
        };
      }
      return post;
    }));
  };

  const addCourse = (courseData: Omit<Course, 'id' | 'rating' | 'enrolledCount' | 'chapters'>) => {
    const newCourse: Course = {
      ...courseData,
      id: `course-${Date.now()}`,
      rating: 5.0,
      enrolledCount: 0,
      chapters: [
        {
          id: `ch-${Date.now()}-1`,
          title: 'পরিচিতি ও প্রথম অধ্যায়',
          lessons: [
            {
              id: `les-${Date.now()}-1`,
              title: '১.১ কোর্স পরিচিতি ও গাইডলাইন',
              duration: '০৫:০০',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              isPremium: false
            }
          ]
        }
      ]
    };
    setCourses(prev => [newCourse, ...prev]);
    addNotification('নতুন কোর্স লাইভ', `সফলভাবে "${newCourse.title}" কোর্সটি আপলোড করা হয়েছে।`, 'success');
  };

  const addChapterToCourse = (courseId: string, chapterTitle: string) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          chapters: [
            ...c.chapters,
            {
              id: `ch-${Date.now()}`,
              title: chapterTitle,
              lessons: []
            }
          ]
        };
      }
      return c;
    }));
  };

  const addLessonToChapter = (courseId: string, chapterId: string, lessonTitle: string, duration: string, isPremium: boolean) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        return {
          ...c,
          chapters: c.chapters.map(ch => {
            if (ch.id === chapterId) {
              return {
                ...ch,
                lessons: [
                  ...ch.lessons,
                  {
                    id: `les-${Date.now()}`,
                    title: lessonTitle,
                    duration,
                    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    isPremium
                  }
                ]
              };
            }
            return ch;
          })
        };
      }
      return c;
    }));
  };

  const addLiveClass = (title: string, subject: string, date: string, time: string, status: 'upcoming' | 'live') => {
    const newClass: LiveClass = {
      id: `live-${Date.now()}`,
      title,
      subject,
      teacherName: user?.name || 'শিক্ষক',
      date,
      time,
      status,
      joinUrl: '#'
    };
    setLiveClasses(prev => [newClass, ...prev]);
    addNotification('নতুন লাইভ ক্লাস নির্ধারিত', `"${title}" সেশনটি সিডিউল করা হয়েছে।`, 'info');
  };

  const updateUserProfile = (name: string, className: string, institution: string, board?: string) => {
    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        name,
        class: className,
        institution,
        board: board || prev.board
      };
    });
    addNotification('প্রোফাইল আপডেট', 'আপনার প্রোফাইল তথ্য সফলভাবে সংরক্ষণ করা হয়েছে।', 'success');
  };

  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const clearNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const addNotification = (title: string, message: string, type: 'info' | 'success' | 'alert') => {
    const newNotif: Notification = {
      id: `notif-${Date.now()}`,
      title,
      message,
      createdAt: new Date().toISOString(),
      isRead: false,
      type
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  return (
    <AuthContext.Provider value={{
      user,
      courses,
      liveClasses,
      forumPosts,
      notifications,
      login,
      register,
      logout,
      updateUserProfile,
      enrollInCourse,
      completeLesson,
      addQuizScore,
      addForumPost,
      addForumReply,
      toggleLikeForumPost,
      addCourse,
      addChapterToCourse,
      addLessonToChapter,
      addLiveClass,
      markNotificationRead,
      clearNotifications
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
