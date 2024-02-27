// RequireAuth.jsx
import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext';

let renderDepth = 0;
export function RequireAuth({ children }) {

  renderDepth++;
  console.log(`Render depth: ${renderDepth}`);

  const { isAuthenticated } = useAuth();
  console.log('RequireAuth - isAuthenticated:', isAuthenticated);
  console.log('Redirecting to login...');

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
