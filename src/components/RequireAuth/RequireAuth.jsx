// RequireAuth.jsx
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext';

export function RequireAuth({ children }) {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/"/>;
  }

}

