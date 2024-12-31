import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Box my={10}>
                    {children}
                </Box>
            </Container>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;