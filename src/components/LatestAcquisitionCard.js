import React, { useEffect, useState } from 'react';
import { fetchLatestAcquiredCompany } from '../api/crunchbaseApi';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LatestAcquisitionCard() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const data = await fetchLatestAcquiredCompany();
        console.log('Fetched company:', data); // Log the fetched data
        setCompany(data);
      } catch (err) {
        setError('Failed to load company.');
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ my: 4 }}>
      {company ? (
        <>
          <Typography variant="h5">{company.name}</Typography>
          <Typography variant="body1">{company.description}</Typography>
        </>
      ) : (
        <Typography variant="body1">No company data available.</Typography>
      )}
    </Box>
  );
}

export default LatestAcquisitionCard;