// AuthContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (login, password) => {
    // Ваша реальная логика аутентификации
    // Например, проверка логина и пароля, отправка запроса на сервер и т.д.

    // Временно устанавливаем isAuthenticated в true для демонстрации успешной аутентификации
    setIsAuthenticated(true);

    console.log('Logging in with:', login, password);
  };

  const handleLogout = () => {
    // Ваша логика выхода (если требуется)
    setIsAuthenticated(false);

    console.log('Logging out');
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
