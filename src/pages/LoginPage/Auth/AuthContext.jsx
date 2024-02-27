// AuthContext.jsx
import React, {createContext, useContext, useEffect, useState} from 'react';
import AuthService from '../Auth/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      // Очищаем ошибки перед запросом
      setLoginError(null);
      setPasswordError(null);

      const response = await AuthService.login(username, password);
      setIsAuthenticated(true);
      localStorage.setItem('accessToken', response.accessToken);
      setUser(response.data || {});
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response && error.response.status === 401) {
        console.error('Authentication failed. Invalid username or password.');
        setLoginError('Authentication failed. Invalid username or password.');
      } else {
        console.error('Server response data:', error.response?.data);
        setPasswordError('Server error during login.');
      }
      // Прокидываем ошибку наружу для обработки в компоненте
      throw error;
    }
  };

  useEffect(() => {
    console.log('handleLogin', isAuthenticated);
  }, [isAuthenticated]);


  const handleLogout = () => {
    // Обновляем состояние пользователя при выходе
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('accessToken');
    console.log('Logged out successfully');
  };

  useEffect(() => {
    // Сбрасываем ошибки при монтировании компонента
    setLoginError(null);
    setPasswordError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        handleLogin,
        handleLogout,
        loginError,
        passwordError
    }}>
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
