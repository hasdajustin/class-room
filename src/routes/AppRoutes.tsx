import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Pricing } from '../pages/Pricing';
import { Contact } from '../pages/Contact';
import { FAQ } from '../pages/FAQ';
import { Blog } from '../pages/Blog';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Courses } from '../pages/Courses';
import { CourseDetails } from '../pages/CourseDetails';
import { Quiz } from '../pages/Quiz';
import { Dashboard } from '../pages/Dashboard';
import { LiveClass } from '../pages/LiveClass';
import { Forum } from '../pages/Forum';
import { Profile } from '../pages/Profile';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { NotFound } from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/live-class" element={<LiveClass />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
