// client/src/api/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'YOUR_PRODUCTION_BACKEND_URL' // e.g., 'https://api.yourportfolio.com/api'
    : 'http://localhost:5001/api', // Your backend development URL
});

// Interceptor to add token to requests
API.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;