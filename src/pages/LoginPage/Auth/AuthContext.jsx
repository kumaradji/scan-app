// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { login as apiLogin, logout as apiLogout } from '../../../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (login, password) => {
    try {
      // Вызываем функцию аутентификации из API
      const response = await apiLogin(login, password);

      // Получаем токен из ответа
      const { accessToken } = response.data;

      // Сохраняем токен в локальном хранилище
      localStorage.setItem('accessToken', accessToken);

      // Устанавливаем isAuthenticated в true
      setIsAuthenticated(true);

      console.log('User logged in');
    } catch (error) {
      // Обрабатываем ошибки аутентификации
      console.error('Error during login:', error);

      // Сбрасываем статус аутентификации
      setIsAuthenticated(false);

      // Пробрасываем ошибку выше
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      // Вызываем функцию разлогинивания из API
      await apiLogout();

      // Удаляем токен из локального хранилища
      localStorage.removeItem('accessToken');

      // Сбрасываем статус аутентификации
      setIsAuthenticated(false);

      console.log('User logged out');
    } catch (error) {
      // Обрабатываем ошибки разлогинивания
      console.error('Error during logout:', error);

      // Пробрасываем ошибку выше
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
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
