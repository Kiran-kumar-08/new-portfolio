// client/src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login'); // Redirect to login page after logout
  };

  return ( // <-- This is where the component's JSX starts
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-blue-400 hover:text-blue-600 transition-colors">
          GOTTA KIRAN KUMAR {/* Or your name */}
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className={`hidden md:flex items-center space-x-6`}>
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Home</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">About</Link>
          <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Projects</Link> {/* Updated to /projects */}
          <Link to="/certificates" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Certificates</Link>
          {/* If products link was removed, it should not be here */}
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Contact</Link>
          {isAuthenticated && (
            <>
              <Link to="/admin" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-medium">Admin</Link>
              <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex flex-col items-center space-y-3 pt-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">Projects</Link> {/* Updated to /projects */}
            <Link to="/certificates" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">Certificates</Link>
            {/* If products link was removed, it should not be here */}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">Contact</Link>
            {isAuthenticated && (
              <>
                <Link to="/admin" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-200 hover:text-primary font-medium">Admin</Link>
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  ); // <-- End of the component's JSX
};

export default Navbar;