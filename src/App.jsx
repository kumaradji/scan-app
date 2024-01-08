// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from "./pages/Main/MainPage";
import AppFooter from './components/AppFooter/AppFooter';
import LoginPage from "./pages/LoginPage/LoginPage";
import { AuthProvider } from "./pages/LoginPage/Auth/AuthContext";
import SearchPage from "./pages/SearchPage/SearchPage"; // Импорт AuthProvider

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <AppFooter />
      </AuthProvider>
    </Router>
  );
}

export default App;
