// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from './pages/Main/MainPage';
import AppFooter from './components/AppFooter/AppFooter';
import LoginPage from './pages/LoginPage/LoginPage';
import { AuthProvider, useAuth } from './pages/LoginPage/Auth/AuthContext'; // Импортируйте useAuth

function App() {
  const { isAuthenticated, login, logout } = useAuth(); // Используйте useAuth для получения значений

  return (
    <Router>
      <AuthProvider>
        <AppHeader isAuthenticated={isAuthenticated} login={login} logout={logout} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Другие маршруты */}
        </Routes>
        <AppFooter />
      </AuthProvider>
    </Router>
  );
}

export default App;
