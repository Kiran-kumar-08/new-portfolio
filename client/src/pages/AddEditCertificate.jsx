// client/src/pages/AddEditCertificate.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api/api';

const AddEditCertificate = () => {
  const { id } = useParams(); // For editing an existing certificate
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    issuingBody: '',
    issueDate: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const fetchCertificate = async () => {
        setLoading(true);
        try {
          const response = await API.get(`/certificates/${id}`);
          const cert = response.data;
          setFormData({
            title: cert.title,
            issuingBody: cert.issuingBody,
            // Format date for input type="date"
            issueDate: cert.issueDate ? new Date(cert.issueDate).toISOString().split('T')[0] : '',
            description: cert.description,
          });
          setPreviewImage(cert.imageUrl); // Set current image as preview
        } catch (err) {
          setError('Failed to load certificate for editing.');
          console.error('Error fetching certificate:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchCertificate();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // Create a local preview
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    // Only append image if a new one is selected or if it's a new entry
    if (image) {
      data.append('image', image);
    } else if (!isEditing) {
        // If adding a new certificate and no image is selected
        setError('Please select an image for the certificate.');
        setLoading(false);
        return;
    }


    try {
      if (isEditing) {
        await API.put(`/certificates/${id}`, data);
        alert('Certificate updated successfully!');
      } else {
        await API.post('/certificates', data);
        alert('Certificate added successfully!');
      }
      navigate('/certificates'); // Redirect to certificates list
    } catch (err) {
      // It's good practice to log the full error response for debugging
      console.error('Certificate operation error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Operation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditing) {
    return (
      <div className="flex justify-center items-center h-96 text-xl text-primary dark:text-blue-400">
        Loading certificate data...
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {isEditing ? 'Edit Certificate' : 'Add New Certificate'}
      </h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="issuingBody" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">Issuing Body</label>
            <input
              type="text"
              id="issuingBody"
              name="issuingBody"
              value={formData.issuingBody}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="issueDate" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">Issue Date</label>
            <input
              type="date"
              id="issueDate"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">Certificate Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required={!isEditing} // Image is required only for new additions
              className="mt-1 block w-full text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary hover:file:bg-blue-100"
            />
            {previewImage && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Image Preview:</p>
                <img src={previewImage} alt="Preview" className="max-w-xs h-auto rounded-md shadow-md" />
              </div>
            )}
            {isEditing && !image && !previewImage && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">No new image selected. Current image will be kept.</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition-colors
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'}
            `}
            disabled={loading}
          >
            {loading ? 'Saving...' : (isEditing ? 'Update Certificate' : 'Add Certificate')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddEditCertificate; // <-- Ensure this line is here