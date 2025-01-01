import React from 'react';
import Layout from '../components/Layout';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import LatestAcquisitionCard from '../components/LatestAcquisitionCard';

function Home() {
  return (
    <Layout>
      <Box textAlign="center" mt={7} mb={5}>
        <Typography variant="h4">
          The latest acquisition is
        </Typography>
      </Box>
      <Box textAlign="center" my={4}>
        <LatestAcquisitionCard />
      </Box>
    </Layout>
  );
}

export default Home;