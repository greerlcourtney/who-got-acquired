// src/components/Footer.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box mt={4} py={2} textAlign="center" bgcolor="#f5f5f5">
      <Typography variant="body2">
        Contact Us: Team@infiniti-minds.com
        <br></br>
        <br></br>
        © {new Date().getFullYear()} Inifiti-Minds. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
