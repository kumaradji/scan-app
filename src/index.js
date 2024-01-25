import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

import App from './App';
import { AuthProvider } from './pages/LoginPage/Auth/AuthContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);