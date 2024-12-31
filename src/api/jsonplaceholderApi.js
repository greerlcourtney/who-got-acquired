import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetch a sample post from JSONPlaceholder
 * @returns {Object} Post data
 */
export const fetchSamplePost = async () => {
  try {
    const response = await apiClient.get('/posts/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching sample post:', error.response || error.message || error);
    throw error;
  }
};