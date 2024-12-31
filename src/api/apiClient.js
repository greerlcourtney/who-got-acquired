// src/api/jsonPlaceholderApi.js

import axios from 'axios';

// Create Axios Instance for JSONPlaceholder
const jsonPlaceholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch a sample post from JSONPlaceholder
 * @returns {Object} Post data
 */
export const fetchLatestAcquiredCompany = async () => {
  try {
    const response = await jsonPlaceholderApi.get('/posts/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching sample post:', error.response?.data || error.message);
    throw error;
  }
};
