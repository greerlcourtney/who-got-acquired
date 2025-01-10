import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <header>
      <Box p={1}>
        <Grid container alignItems="center">
          <Grid item xs={1} textAlign="center">
            <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <Typography variant="h6">Welcome to Infiniti-Minds</Typography>
          </Grid>
          <Grid item xs={11} textAlign="right">
            <nav>
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/contact-us">Contact Us</a>
            </nav>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}

export default Header;