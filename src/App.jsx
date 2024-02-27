// App.jsx
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from './pages/Main/MainPage';
import AppFooter from './components/AppFooter/AppFooter';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from "./pages/SearchPage/SearchPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import {AuthProvider} from "./pages/LoginPage/Auth/AuthContext";
import {RequireAuth} from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<RequireAuth><SearchPage /></RequireAuth>} />
          <Route path="/result" element={<RequireAuth><ResultPage /></RequireAuth>} />
          {/*<Route path="/search" element={<SearchPage />} />*/}
          {/*<Route path="/result" element={<ResultPage />} />*/}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <AppFooter />
      </AuthProvider>
    </Router>
  );
}

export default App;
