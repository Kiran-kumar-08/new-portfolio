// client/src/components/common/Footer.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Kiran. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/kiran-kumar-08" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-kumar-gotta-8319bb2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://instagram.com/oye__kiran_143" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/GottaKiran29552?t=8yGwEcls4VBiE-SpGNtzBg&s=09" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
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