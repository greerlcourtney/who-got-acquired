import React, { useEffect, useState } from 'react';
import { fetchSamplePost } from '../api/jsonplaceholderApi';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function LatestAcquisitionCard() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSamplePost = async () => {
      try {
        const data = await fetchSamplePost();
        setPost(data);
      } catch (err) {
        setError('Failed to fetch the sample post.');
      } finally {
        setLoading(false);
      }
    };

    loadSamplePost();
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
    <Box borderColor={'black'} border={1} borderRadius={16} p={2} m={2}>
      <Typography variant="h4" gutterBottom>
        Disney Channel
      </Typography>
      {post ? (
        <Box>
          <Typography variant="h6">Title: {post.title}</Typography>
          <Typography variant="body1">Body: {post.body}</Typography>
        </Box>
      ) : (
        <Typography>No post data available.</Typography>
      )}
     </Box>
    </>
  );
}

export default LatestAcquisitionCard;