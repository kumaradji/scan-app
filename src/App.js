// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Assuming you're using BrowserRouter
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from "./pages/Main/MainPage";

import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <Router>
      <AppHeader />
      <MainPage />
      {/* Add other components/routes as needed */}

      <AppFooter />
    </Router>
  );
}

export default App;
