import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './theme.css';

// Ensure compatibility with GitHub Pages
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="matrix-bg"></div>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);