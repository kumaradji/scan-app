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
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.status === 401) {
        // В случае ошибки 401 (Unauthorized) добавляем дополнительные действия
        console.error('Authentication failed. Invalid username or password.');

        // Здесь вы можете бросить исключение, чтобы обработать его в компоненте LoginForm
        throw new Error('Authentication failed. Invalid username or password.');
      } else {
        // Если это не ошибка 401, просто логируем ошибку
        console.error('Server response data:', error.response?.data);
      }
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, logout }}>
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
