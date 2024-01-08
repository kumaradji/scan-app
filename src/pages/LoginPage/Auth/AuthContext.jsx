// AuthContext.jsx

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(
    process.env.NODE_ENV === 'development' ? true : false
  );

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
