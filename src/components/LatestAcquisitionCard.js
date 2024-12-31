import React, { useEffect, useState } from 'react';
import { fetchLatestAcquiredCompany } from '../api/crunchbaseApi';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LatestAcquistionCard() {
  const [acquisition, setAcquisition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLatestAcquistionCard = async () => {
      try {
        const data = await fetchLatestAcquiredCompany();
        if (data) {
          setAcquisition(data);
        } else {
          setError('No acquisition data available.');
        }
      } catch (err) {
        setError('Failed to fetch the latest acquisition.');
      } finally {
        setLoading(false);
      }
    };

    loadLatestAcquistionCard();
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

        <Typography color="error">{error}</Typography>

    );
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Latest Acquired Company
      </Typography>
      {acquisition ? (
        <Box>
          <Typography variant="h6">
            {acquisition.properties?.identifier?.value || 'N/A'}
          </Typography>
          <Typography variant="body1">
            Acquired On: {acquisition.properties?.acquisition_date || 'N/A'}
          </Typography>
          <Typography variant="body2">
            Price: {acquisition.properties?.price || 'N/A'}
          </Typography>
        </Box>
      ) : (
        <Typography>No acquisition data available.</Typography>
      )}
  </>
  );
}

export default LatestAcquistionCard;
