// client/src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await API.get('/contact');
        setMessages(response.data);
      } catch (err) {
        setError('Failed to fetch messages. Access denied or server error.');
        console.error('Error fetching messages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await API.put(`/contact/${id}`);
      setMessages(messages.map(msg => msg._id === id ? { ...msg, isRead: true } : msg));
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await API.delete(`/contact/${id}`);
        setMessages(messages.filter(msg => msg._id !== id));
      } catch (err) {
        console.error('Error deleting message:', err);
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Manage Content</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/certificates/add" className="block w-full text-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
                Add New Certificate
              </Link>
            </li>
          
            {/* Add links to view/edit/delete lists if desired, e.g., /admin/certificates */}
            <li className="text-center text-gray-600 dark:text-gray-400 mt-4">
                (View/Edit/Delete existing items from their respective public pages for now)
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Messages</h3>
          {loading && <p className="text-gray-600 dark:text-gray-400">Loading messages...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && messages.length === 0 && (
            <p className="text-gray-600 dark:text-gray-400">No contact messages received yet.</p>
          )}
          {!loading && !error && messages.length > 0 && (
            <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {messages.map((msg) => (
                <li key={msg._id} className={`p-4 rounded-md shadow ${msg.isRead ? 'bg-gray-100 dark:bg-gray-700' : 'bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-lg text-gray-900 dark:text-white">{msg.name} ({msg.email})</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${msg.isRead ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'}`}>
                      {msg.isRead ? 'Read' : 'New'}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Subject:</strong> {msg.subject}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{msg.message}</p>
                  <div className="flex justify-end space-x-2">
                    {!msg.isRead && (
                      <button
                        onClick={() => handleMarkAsRead(msg._id)}
                        className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition-colors"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteMessage(msg._id)}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;