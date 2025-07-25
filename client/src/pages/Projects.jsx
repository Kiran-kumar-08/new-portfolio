// client/src/pages/Projects.jsx
import React, { useState } from 'react'; // Import useState
import ProjectCard from '../components/portfolio/ProjectCard';

// You can keep dummyProjects here for now, or fetch from backend if you built the API
const dummyProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.',
    imageUrl: '/download.jpeg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://example.com/ecommerce', // Still a placeholder
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management tool with drag-and-drop functionality, real-time updates, and user collaboration features.',
    imageUrl: '/Task.webp',
    tags: ['React', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Redux'],
    liveLink: 'https://example.com/task-manager', // Still a placeholder
    githubLink: 'https://github.com/yourusername/task-management-app',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A sleek personal blog platform with a rich text editor for content creation and a modern UI for readers.',
    imageUrl: '/blog.avif',
    tags: ['Next.js', 'Strapi CMS', 'GraphQL', 'Tailwind CSS'],
    liveLink: 'https://example.com/blog', // Still a placeholder
    githubLink: 'https://github.com/yourusername/personal-blog',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'An application that allows users to search for recipes based on ingredients, dietary preferences, and cuisine types, fetching data from an external API.',
    imageUrl: '/recipe.png',
    tags: ['React', 'External API', 'CSS Modules'],
    liveLink: 'https://example.com/recipe-finder', // Still a placeholder
    githubLink: 'https://github.com/yourusername/recipe-finder',
  },
  {
    id: 5,
    title: 'Laptop Price Prediction',
    description: 'A machine learning model and web interface to predict laptop prices based on various specifications. Demonstrates data preprocessing, model training, and deployment.',
    imageUrl: '/lap.jpg',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Machine Learning', 'Data Science'],
    liveLink: 'https://example.com/laptop-prediction', // Still a placeholder
    githubLink: 'https://github.com/yourusername/laptop-price-prediction',
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    description: 'A comprehensive web application for managing restaurant operations, including table bookings, order management, menu customization, and staff roles.',
    imageUrl: '/rest.jpg',
    tags: ['MERN Stack', 'Redux', 'Socket.IO', 'Authentication', 'Admin Panel'],
    liveLink: 'https://example.com/restaurant-system', // Still a placeholder
    githubLink: 'https://github.com/yourusername/restaurant-management-system',
  },
];


const Projects = () => {
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);
  const [unavailableProjectTitle, setUnavailableProjectTitle] = useState('');

  const handleLiveLinkClick = (title) => {
    setUnavailableProjectTitle(title);
    setShowUnavailableMessage(true);
    // Automatically hide after a few seconds
    setTimeout(() => {
      setShowUnavailableMessage(false);
      setUnavailableProjectTitle('');
    }, 3000); // Message disappears after 3 seconds
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Projects</h2>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Here are some of my recent projects that showcase my skills in full-stack development. Each project reflects my commitment to building clean, efficient, and user-friendly applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onLiveLinkClick={handleLiveLinkClick} // Pass the new handler
          />
        ))}
      </div>

      {/* "Boom Image" / Unavailable Message Overlay */}
      {showUnavailableMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
          <div className="bg-red-700 text-white p-8 rounded-lg shadow-xl text-center max-w-sm transform scale-100 opacity-100 transition-all duration-300 ease-out animate-pop-in">
            <img
              src="/boom.webp" // Replace with your actual image path (e.g., from public folder)
              alt="Unavailable"
              className="mx-auto w-24 h-24 mb-4"
            />
            <h3 className="text-3xl font-bold mb-2">Link Not Active!</h3>
            <p className="text-xl mb-4">
              "Live demo for "{unavailableProjectTitle}" is not yet available."
            </p>
            <p className="text-sm italic">
              Please check back later or view the GitHub repository.
            </p>
            <button
              onClick={() => setShowUnavailableMessage(false)}
              className="mt-6 px-6 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
            >
              Got It!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;