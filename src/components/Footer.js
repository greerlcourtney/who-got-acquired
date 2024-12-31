import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box component="footer" py={5} textAlign="center" bgcolor="#f5f5f5" >
      <Typography variant="body1" >
        Contact Us: <a href="mailto:team@infiniti-minds.com">team@infiniti-minds.com</a>
        <br />
        <br />
        © {currentYear} Infiniti-Minds. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;