import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container maxWidth="lg" component="main" flexGrow={1} >
        <Box>
          {children}
        </Box>
      </Container>
      <Footer />
    </Box>

  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;