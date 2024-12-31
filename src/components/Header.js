import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <AppBar position="static" >
      <Toolbar >
      <Typography variant="h6"  sx={{ flexGrow: 1 }} >
          Invest-O-Clock!
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;



