// src/api/apiClient.js

import axios from 'axios';

// Load API Key from Environment Variables
const CRUNCHBASE_API_KEY = process.env.REACT_APP_CRUNCHBASE_API_KEY;

// Create an Axios Instance for Crunchbase API
const apiClient = axios.create({
  baseURL: 'https://api.crunchbase.com/api/v4/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CRUNCHBASE_API_KEY}`,
  },
  timeout: 10000, // Optional: 10-second timeout for requests
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Log outgoing requests (optional)
    console.log(`[API Request] ${config.method.toUpperCase()} - ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API Request Error]:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Log successful responses (optional)
    console.log('[API Response Success]:', response.status);
    return response;
  },
  (error) => {
    // Handle global API errors
    console.error('[API Response Error]:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
