// AuthContext.jsx
import React, {createContext, useContext, useState} from 'react';
import AuthService from '../Auth/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      // Сохранение токена
      localStorage.setItem('accessToken', response.data.accessToken);
      
      setUser(response.data);
    } catch (error) {
      console.error('Error during login:', error);
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
    <AuthContext.Provider value={{ user, handleLogin, logout }}>
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
