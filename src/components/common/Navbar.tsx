import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Menu, X, Bell, Award, LogOut, 
  User as UserIcon, LayoutDashboard, PlusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { user, logout, notifications, markNotificationRead } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileNotifications, setShowMobileNotifications] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'text-primary-600 font-bold dark:text-primary-400' 
      : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium';
  };

  const handleNotificationClick = (id: string) => {
    markNotificationRead(id);
  };

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'কোর্সসমূহ', path: '/courses' },
    { name: 'লাইভ ক্লাস', path: '/live-class' },
    { name: 'ফোরাম', path: '/forum' },
    { name: 'পদ্ধতি ও ফি', path: '/pricing' },
    { name: 'আমাদের সম্পর্কে', path: '/about' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-black text-primary-600 dark:text-primary-400 tracking-tight">
                ক্লাসরুম
              </span>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex ml-8 xl:ml-10 space-x-5 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors duration-200 py-2 relative ${isActive(link.path)}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions & Profile section (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                {/* Points Badge */}
                {user.role === 'student' && (
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/50 rounded-full text-yellow-700 dark:text-yellow-400 text-xs font-bold transition-all hover:scale-105"
                  >
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>{user.points} পয়েন্ট</span>
                  </Link>
                )}

                {/* Notifications Bell */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowNotifications(!showNotifications);
                      setShowProfileDropdown(false);
                    }}
                    className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-xl relative transition-colors cursor-pointer"
                  >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900 animate-pulse" />
                    )}
                  </button>

                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-850 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-50 overflow-hidden text-sm"
                      >
                        <div className="px-4 py-2 font-semibold border-b border-gray-100 dark:border-gray-800 flex justify-between items-center dark:text-white">
                          <span>বিজ্ঞপ্তি সমূহ ({unreadCount})</span>
                          <Link to="/dashboard" className="text-xs text-primary-600 hover:underline">সব দেখুন</Link>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {notifications.length === 0 ? (
                            <div className="px-4 py-6 text-center text-gray-500">কোন বিজ্ঞপ্তি নেই</div>
                          ) : (
                            notifications.map((n) => (
                              <div 
                                key={n.id}
                                onClick={() => handleNotificationClick(n.id)}
                                className={`px-4 py-3 border-b border-gray-50/50 dark:border-gray-800/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${!n.isRead ? 'bg-primary-50/30 dark:bg-primary-950/10' : ''}`}
                              >
                                <div className="flex justify-between items-start">
                                  <span className={`font-medium ${!n.isRead ? 'text-primary-700 dark:text-primary-400' : 'text-gray-700 dark:text-gray-400'}`}>{n.title}</span>
                                  {!n.isRead && <span className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{n.message}</p>
                              </div>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowProfileDropdown(!showProfileDropdown);
                      setShowNotifications(false);
                    }}
                    className="flex items-center space-x-2 focus:outline-none cursor-pointer"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-500/30 hover:ring-primary-500 transition-all duration-200"
                    />
                  </button>

                  <AnimatePresence>
                    {showProfileDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-850 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-50 text-sm"
                      >
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                          <p className="font-semibold text-gray-800 dark:text-white truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{user.email}</p>
                          <span className="inline-block mt-1.5 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                            {user.role === 'student' ? 'শিক্ষার্থী' : user.role === 'teacher' ? 'শিক্ষক / মেন্টর' : 'এডমিন'}
                          </span>
                        </div>
                        
                        {user.role === 'student' ? (
                          <>
                            <Link 
                              to="/dashboard" 
                              className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-750 transition-colors"
                              onClick={() => setShowProfileDropdown(false)}
                            >
                              <LayoutDashboard className="w-4 h-4 text-gray-400" />
                              <span>আমার ড্যাশবোর্ড</span>
                            </Link>
                            <Link 
                              to="/profile" 
                              className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-750 transition-colors"
                              onClick={() => setShowProfileDropdown(false)}
                            >
                              <UserIcon className="w-4 h-4 text-gray-400" />
                              <span>প্রোফাইল সেটিংস</span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link 
                              to="/admin" 
                              className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-750 transition-colors"
                              onClick={() => setShowProfileDropdown(false)}
                            >
                              <LayoutDashboard className="w-4 h-4 text-green-600" />
                              <span>এডমিন ড্যাশবোর্ড</span>
                            </Link>
                            <Link 
                              to="/admin" 
                              className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-750 transition-colors"
                              onClick={() => setShowProfileDropdown(false)}
                            >
                              <PlusCircle className="w-4 h-4 text-green-600" />
                              <span>কোর্স পরিচালনা</span>
                            </Link>
                          </>
                        )}

                        <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-1">
                          <button
                            onClick={() => {
                              logout();
                              setShowProfileDropdown(false);
                              navigate('/');
                            }}
                            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>লগআউট</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-sm font-semibold text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                >
                  লগইন
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-primary-500/20"
                >
                  নতুন অ্যাকাউন্ট
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button & actions (Mobile/Tablet) */}
          <div className="flex items-center lg:hidden space-x-1.5">
            {/* Mobile notification bell shortcut */}
            {user && (
              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowMobileNotifications(true);
                }}
                className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-xl relative transition-colors cursor-pointer"
                title="Notifications Shortcut Mobile"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900 animate-pulse" />
                )}
              </button>
            )}

            {/* Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-xl transition-all cursor-pointer"
              title="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden shadow-inner"
          >
            <div className="py-3 px-4 space-y-1.5 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                      active 
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/40 dark:text-primary-400' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-850'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {user && (
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-3 space-y-3">
                  <div className="flex items-center space-x-3 py-1 px-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/20"
                    />
                    <div>
                      <div className="font-bold dark:text-white text-sm">{user.name}</div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>

                  {/* Points Badge on Mobile */}
                  {user.role === 'student' && (
                    <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-100 dark:border-yellow-900/40 rounded-xl text-yellow-700 dark:text-yellow-400 text-xs font-bold mx-1">
                      <Award className="w-4.5 h-4.5 text-yellow-500" />
                      <span>{user.points} পয়েন্ট</span>
                    </div>
                  )}

                  {/* Mobile notifications list integrated cleanly */}
                  <div className="mx-1">
                    <button
                      onClick={() => setShowMobileNotifications(!showMobileNotifications)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 rounded-xl transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-gray-500" />
                        <span>বিজ্ঞপ্তি সমূহ</span>
                        {unreadCount > 0 && (
                          <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] rounded-full font-sans">
                            {unreadCount}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-primary-600 font-bold">
                        {showMobileNotifications ? 'লুকান' : 'দেখুন'}
                      </span>
                    </button>

                    {showMobileNotifications && (
                      <div className="mt-2 pl-3 border-l-2 border-primary-100 dark:border-primary-900/50 space-y-2 max-h-48 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="px-3 py-4 text-xs text-gray-400 text-center">কোন বিজ্ঞপ্তি নেই</div>
                        ) : (
                          notifications.map((n) => (
                            <div 
                              key={n.id}
                              onClick={() => {
                                handleNotificationClick(n.id);
                              }}
                              className={`p-2.5 rounded-xl border border-gray-50 dark:border-gray-800/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${!n.isRead ? 'bg-primary-50/20 dark:bg-primary-950/5' : ''}`}
                            >
                              <div className="flex justify-between items-start">
                                <span className={`text-[11px] font-bold ${!n.isRead ? 'text-primary-700 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>{n.title}</span>
                                {!n.isRead && <span className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1" />}
                              </div>
                              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{n.message}</p>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>

                  {user.role === 'student' ? (
                    <div className="space-y-1">
                      <Link
                        to="/dashboard"
                        className="block py-2.5 px-3 text-xs font-bold rounded-xl text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-850"
                        onClick={() => setIsOpen(false)}
                      >
                        আমার ড্যাশবোর্ড
                      </Link>
                      <Link
                        to="/profile"
                        className="block py-2.5 px-3 text-xs font-bold rounded-xl text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-850"
                        onClick={() => setIsOpen(false)}
                      >
                        প্রোফাইল সেটিংস
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Link
                        to="/admin"
                        className="block py-2.5 px-3 text-xs font-bold rounded-xl text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-850"
                        onClick={() => setIsOpen(false)}
                      >
                        এডমিন ড্যাশবোর্ড
                      </Link>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                      navigate('/');
                    }}
                    className="flex items-center space-x-2 w-full text-left py-2.5 px-3 text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>লগআউট</span>
                  </button>
                </div>
              )}

              {!user && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full text-center py-2.5 text-sm font-bold rounded-xl text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-850 border border-gray-200 dark:border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    লগইন
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full text-center py-2.5 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-md shadow-primary-600/10"
                    onClick={() => setIsOpen(false)}
                  >
                    নতুন অ্যাকাউন্ট
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

