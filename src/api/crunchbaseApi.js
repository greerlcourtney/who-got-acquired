import axios from 'axios';

const CRUNCHBASE_API_KEY = process.env.REACT_APP_CRUNCHBASE_API_KEY;

const crunchbaseApi = axios.create({
  baseURL: 'https://api.crunchbase.com/api/v4/',
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
      `/searches/organization/acquisition`,
      {
        field_ids: ['identifier', 'acquisition_date', 'price'],
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