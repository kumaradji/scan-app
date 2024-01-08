// RequireAuth/RequireAuth.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
