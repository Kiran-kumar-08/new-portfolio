import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
  FaPython
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiMysql } from 'react-icons/si';

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/face copy.jpeg"  // Make sure it's in public folder
            alt="GOTTA KIRAN KUMAR"
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-primary dark:border-blue-400"
          />
        </div>
        <div className="md:w-2/3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="mb-4">
            I am a passionate and driven individual with a keen interest in the exciting fields of Data Science, Machine Learning, and Full Stack Development.
          </p>
          <p className="mb-4">
            I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js). I thrive on solving complex problems and am constantly exploring new technologies to enhance my skill set and deliver innovative solutions.
          </p>
          <p>
            Beyond coding, I enjoy Reading books, playing Games. I believe that continuous learning and a collaborative spirit are key to success in this ever-evolving tech landscape.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
            { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
            { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
            { name: 'Java', icon: <FaJava className="text-red-500" /> },
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'SQL', icon: <SiMysql className="text-blue-700" /> },
            { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="text-5xl mb-3">
                {skill.icon}
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
