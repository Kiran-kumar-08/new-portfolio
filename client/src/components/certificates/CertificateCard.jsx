// client/src/components/certificates/CertificateCard.jsx
import React from 'react';

const CertificateCard = ({ certificate }) => {
  const issueDate = new Date(certificate.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={certificate.imageUrl || 'https://via.placeholder.com/600x400?text=Certificate+Image'}
        alt={certificate.title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => window.open(certificate.imageUrl, '_blank')} // Open image in new tab on click
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{certificate.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          <strong>Issued By:</strong> {certificate.issuingBody}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          <strong>Date:</strong> {issueDate}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;