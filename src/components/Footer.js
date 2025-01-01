import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box component="footer" py={5} textAlign="center">
      <Typography variant="body1" >
        Contact Us: team@infiniti-minds.com
        <br />
        <br />
        © {currentYear} Infiniti-Minds. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;