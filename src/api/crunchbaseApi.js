// filepath: /Users/courtneygreer/Development/invest-o-clock/src/api/crunchbaseApi.js
import axios from 'axios';

const CRUNCHBASE_API_KEY = process.env.REACT_APP_CRUNCHBASE_API_KEY;

console.log('CRUNCHBASE_API_KEY:', CRUNCHBASE_API_KEY); // Log the API key to ensure it's being read correctly

const crunchbaseApi = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.crunchbase.com/api/v4/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CRUNCHBASE_API_KEY}`,
  },
});

/**
 * Fetch the latest acquired company from Crunchbase
 * @returns {Object} Acquisition data
 */
export const fetchLatestAcquiredCompany = async () => {
  try {
    const response = await crunchbaseApi.post(
      '/searches/organization/acquisition',
      {
        field_ids: ['name', 'website_url', 'short_description'],
        query: [],
        sort: [
          {
            field_id: 'acquisition_date',
            order: 'desc',
          },
        ],
        limit: 1,
      }
    );
    console.log('API response:', response); // Log the full response
    return response.data;
  } catch (error) {
    console.error('Error fetching latest acquired company:', error.response || error.message || error); // Log detailed error information
    throw error;
  }
};