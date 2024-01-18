// RequireAuth/RequireAuth.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ isAuthenticated, children }) {
  console.log('Is Authenticated:', isAuthenticated);

  if (!isAuthenticated) {
    console.log('Неаутентифицированный пользователь, перенаправление на страницу входа');
    return <Navigate to="/login" />;
  }

  return children;
}
