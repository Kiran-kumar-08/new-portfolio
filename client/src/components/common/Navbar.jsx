// client/src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <nav className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md shadow-md border-b border-gray-300 dark:border-gray-700 sticky top-0 z-[999]">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    {/* Brand with logo */}
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-10 w-10 rounded-full hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out"
      />
    </Link>

    {/* Desktop menu */}
    <div className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Home</Link>
      <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">About</Link>
      <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Projects</Link>
      <Link to="/certificates" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Certificates</Link>
      <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Contact</Link>

      <button
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all"
        title="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {isAuthenticated && (
        <>
          <Link to="/admin" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Admin</Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </>
      )}
    </div>

    {/* Mobile menu toggle */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile menu */}
  {isOpen && (
    <div className="md:hidden bg-white/70 dark:bg-gray-800/40 backdrop-blur-md border-t border-gray-300 dark:border-gray-700 pb-4">
      <div className="flex flex-col items-center space-y-3 pt-4">
        <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">Projects</Link>
        <Link to="/certificates" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">Certificates</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">Contact</Link>

        <button
          onClick={() => {
            toggleTheme();
            setIsOpen(false);
          }}
          className="text-gray-800 dark:text-gray-200 hover:text-yellow-500 font-medium"
        >
          {theme === 'dark' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
        </button>

        {isAuthenticated && (
          <>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="block text-gray-800 dark:text-gray-200 hover:text-primary font-medium">Admin</Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
