/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  class?: string;
  institution?: string;
  board?: string;
  avatar?: string;
  points: number;
  badges: Badge[];
  enrolledCourses: string[]; // Course IDs
  quizScores: QuizScore[];
  completedChapters: string[]; // Chapter IDs
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlockedAt: string;
}

export interface QuizScore {
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  takenAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  pdfUrl?: string;
  isPremium?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Class 6-8' | 'Class 9-10' | 'HSC' | 'Admission';
  subject: string;
  teacherName: string;
  teacherRole: string;
  teacherAvatar?: string;
  rating: number;
  enrolledCount: number;
  thumbnail: string;
  chapters: Chapter[];
  isPremium: boolean;
  price?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  courseTitle: string;
  title: string;
  questions: QuizQuestion[];
  pointsAwarded: number;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorName: string;
  authorRole: 'student' | 'teacher' | 'admin';
  authorAvatar?: string;
  createdAt: string;
  likes: number;
  replies: ForumReply[];
  tags: string[];
}

export interface ForumReply {
  id: string;
  content: string;
  authorName: string;
  authorRole: 'student' | 'teacher' | 'admin';
  authorAvatar?: string;
  createdAt: string;
}

export interface LiveClass {
  id: string;
  title: string;
  subject: string;
  teacherName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'completed';
  joinUrl: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  type: 'info' | 'success' | 'alert';
}
