import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM client (Note: The import from 'react-dom' is used for server rendering)
import App from './App.jsx'; // Importing your main App component
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

// Creating a React root and rendering the App component within it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the entire application with BrowserRouter for routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
