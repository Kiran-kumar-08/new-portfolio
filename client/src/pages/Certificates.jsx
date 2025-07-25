// client/src/pages/Certificates.jsx
import React, { useState, useEffect } from 'react';
import CertificateCard from '../components/certificates/CertificateCard';
import API from '../api/api';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await API.get('/certificates');
        setCertificates(response.data);
      } catch (err) {
        // More robust error handling: check if it's a network error or API error
        setError(err.response?.data?.message || 'Failed to fetch certificates. Please try again later.');
        console.error('Error fetching certificates:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96 text-xl text-primary dark:text-blue-400">
        Loading Certificates...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96 text-xl text-red-500 dark:text-red-400">
        {error}
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="flex justify-center items-center h-96 text-xl text-gray-600 dark:text-gray-400">
        No certificates found.
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Certificates</h2>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        A collection of certifications I've earned, demonstrating my commitment to continuous learning and professional development in various tech domains.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <CertificateCard key={cert._id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates; // <-- This is the crucial line for the default export