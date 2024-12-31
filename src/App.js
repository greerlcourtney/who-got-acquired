import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LatestAcquisition from './pages/LatestAcquisition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest-acquisition" element={<LatestAcquisition />} />
      </Routes>
    </Router>
  );
}

export default App;
