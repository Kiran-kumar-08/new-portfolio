// client/src/components/portfolio/ProjectCard.jsx
import React from 'react';

// Define a list of common placeholder URLs
const PLACEHOLDER_URLS = [
  'https://example.com',
  'https://example.com/ecommerce',
  'https://example.com/task-manager',
  'https://example.com/blog',
  'https://example.com/recipe-finder',
  'https://example.com/laptop-prediction',
  'https://example.com/restaurant-system',
  '#', // Common placeholder for empty links
  '', // Empty string for empty links
];

const isPlaceholderLink = (url) => {
  if (!url) return true; // Check for null or empty string
  const lowerCaseUrl = url.toLowerCase();
  return PLACEHOLDER_URLS.some(placeholder => lowerCaseUrl.startsWith(placeholder));
};

const ProjectCard = ({ project, onLiveLinkClick }) => { // Add onLiveLinkClick prop
  const handleLiveLinkClick = (e) => {
    if (isPlaceholderLink(project.liveLink)) {
      e.preventDefault(); // Prevent actual navigation
      if (onLiveLinkClick) {
        onLiveLinkClick(project.title); // Call the parent handler
      }
    }
    // If not a placeholder, allow default link behavior
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={project.imageUrl || 'https://via.placeholder.com/600x400?text=Project+Image'} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags && project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {/* Apply onClick handler to the Live Link */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveLinkClick} // Add this handler
              className={`text-primary hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium
                         ${isPlaceholderLink(project.liveLink) ? 'cursor-not-allowed opacity-70' : ''}`} // Optional: visual cue for placeholder
            >
              View Live
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 transition-colors font-medium">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;