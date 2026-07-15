import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 font-sans">
            {/* Top Navigation */}
            <Navbar />

            {/* Main Application Body */}
            <main className="flex-grow">
              <AppRoutes />
            </main>

            {/* Bottom Footer */}
            <Footer />
          </div>
        </AuthProvider>
    </BrowserRouter>
  );
}
