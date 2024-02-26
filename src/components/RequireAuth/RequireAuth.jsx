// RequireAuth.jsx
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext';

export function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  console.log('Redirecting to login...');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
