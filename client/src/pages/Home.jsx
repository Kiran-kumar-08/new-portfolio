// client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 animate-fade-in-down">
          Hi, I'm <span className="text-primary dark:text-blue-400">GOTTA KIRAN KUMAR</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-up">
          A passionate <span className="font-semibold text-primary dark:text-blue-400">Full-Stack Developer</span> building modern and scalable web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/projects" // Corrected: Removed the multiline comment within JSX attribute
            className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
          >
            Approach Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;