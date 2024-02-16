// AuthContext.jsx
import React, {createContext, useContext, useState} from 'react';
import * as authApi from '../../../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (loginData) => {
    try {
      // Ваша реальная логика аутентификации
      // Например, отправка запроса на сервер

      // Получаем токен после успешной аутентификации
      const token = '...'; // Замените на вашу логику получения токена

      // Сохраняем токен в localStorage
      localStorage.setItem('accessToken', token);

      // Передаем токен в getUserInfo
      const userInfo = await authApi.getUserInfo();

      // Устанавливаем пользователя в state
      setUser(userInfo);

      console.log('Logging in with:', loginData);
    } catch (error) {
      console.error('Error during login:', error);
      // Обработка ошибок, например, отображение сообщения об ошибке пользователю
    }
  };

  const logout = () => {
    // Вызываем logout из api/auth.js
    authApi.logout(() => {
      // Сбрасываем состояние аутентификации
      setUser(null);
    });

    console.log('Logging out');
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
