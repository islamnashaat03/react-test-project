import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'; //GET BOOTSTRAP GRID STYLES
import './General-styles/style.scss'; // get all styles from styles folder
import './data/fetch-products.ts';

// Create a root for React rendering and render the App component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
