import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './theme.css';

// Ensure compatibility with GitHub Pages
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="matrix-bg"></div>
    <App />
  </React.StrictMode>
);