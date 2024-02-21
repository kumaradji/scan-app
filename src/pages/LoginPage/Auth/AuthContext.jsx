// AuthContext.jsx
import React, {createContext, useContext, useState} from 'react';
import AuthService from '../Auth/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      setIsAuthenticated(true);
      localStorage.setItem('accessToken', response.accessToken);
      setUser(response.data || {});
      console.log('_____________AuthContext: Login success!______________');
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.status === 401) {
        console.error('Authentication failed. Invalid username or password.');
        throw new Error('Authentication failed. Invalid username or password.');
      } else {
        console.error('Server response data:', error.response?.data);
      }
    }
  };

  const logout = () => {
    // Обновляем состояние пользователя при выходе
    setUser(null);
    localStorage.removeItem('accessToken');
    console.log('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
