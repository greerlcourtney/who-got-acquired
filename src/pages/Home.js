import React from 'react'
import { Button, Typography } from '@mui/material';


 function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" component="h1" gutterBottom>
            Welcome to Invest-O-Clock!
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
            Click Below to see the latest investment
        </Typography>
        <Button variant="contained" color="primary">
            Click me! 
        </Button>
        </header>
    </div>
  )
};

export default Home;
