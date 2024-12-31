import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

function ContactUs() {
  return (
    <Layout>
      <Container maxWidth="md" >
        <Box textAlign="center" my={28} py={5}>
          <Typography variant="h3" gutterBottom>
            We'd Love to Hear from You!
          </Typography>

          <Typography variant="h5" paragraph>
            Drop us a line at: <a href="mailto:team@infiniti-minds.com">team@infiniti-minds.com</a>
          </Typography>
          <Typography variant="h8" paragraph>
            Got any ideas, feedback, or found a bug? 
            <br>
            </br>We're all ears! Your input helps us make our app better and more fun for everyone.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

export default ContactUs;