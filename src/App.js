// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Обновленные импорты
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from "./pages/Main/MainPage";

import AppFooter from './components/AppFooter/AppFooter';
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
