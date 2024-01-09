// AuthState.js

import { useState, useEffect } from 'react';

export const useAuthState = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, setAuthenticated };
};