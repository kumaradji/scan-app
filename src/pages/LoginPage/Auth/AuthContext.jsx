// AuthContext.jsx
import { createContext, useContext } from 'react';
import { useAuthState } from './AuthState';
import { isDevelopment } from '../../../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, setAuthenticated } = useAuthState(isDevelopment || process.env.NODE_ENV === 'development');

  const login = () => {
    // Фактическая логика входа
    setAuthenticated(true);
  };

  const logout = () => {
    // Фактическая логика выхода
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться в пределах AuthProvider');
  }
  return context;
};
