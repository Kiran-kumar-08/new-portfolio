// client/src/components/common/Footer.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border-t border-gray-300 dark:border-gray-700 py-8 mt-12 text-gray-800 dark:text-white shadow-md z-50 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4 font-medium">&copy; {new Date().getFullYear()} StackZy. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/kiran-kumar-08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-kumar-gotta-8319bb2b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/oye__kiran_143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/GottaKiran29552"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
