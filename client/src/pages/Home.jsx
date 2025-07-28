// client/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '/Users/apple/Desktop/my-app2/client/public/face copy.jpeg'; // ✅ Import your photo

const Home = () => {
  return (
<section className="relative flex items-center justify-center min-h-[calc(100vh-80px)] py-20 px-4 bg-transparent">
      
      {/* Left Side: Text */}
      <div className="text-center md:text-left max-w-2xl animate-fade-in-down">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Hi, I'm <span className="text-primary dark:text-blue-400">GOTTA KIRAN KUMAR</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed animate-fade-in-up">
          A passionate <span className="font-semibold text-primary dark:text-blue-400">Full-Stack Developer</span> building modern and scalable web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/projects"
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

      {/* Right Side: Profile Image */}
      {/* Right Side: Profile Image */}
<div className="mb-10 md:mb-0 md:ml-16 animate-fade-in-up">
  <img
    src="/face copy.jpeg"  // ✅ Use this path (if inside public/)
    alt="Kiran Kumar"
    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
  />
</div>

    </section>
  );
};

export default Home;
