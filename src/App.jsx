import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import MainPage from './pages/Main/MainPage';
import AppFooter from './components/AppFooter/AppFooter';
import LoginPage from './pages/LoginPage/LoginPage';
import { AuthProvider } from './pages/LoginPage/Auth/AuthContext';
import { useAuth } from './pages/LoginPage/Auth/AuthContext';
import SearchPage from "./pages/SearchPage/SearchPage";
import ResultPage from "./pages/ResultPage/ResultPage";

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: props.location }} />
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppHeader />
        {/*<Routes>*/}
        {/*  <Route path="/" element={<PrivateRoute element={<MainPage />} />} />*/}
        {/*  <Route path="/login" element={<LoginPage />} />*/}
        {/*  <Route path="/search" element={<SearchPage />} />*/}
        {/*  <Route path="/results" element={<ResultPage />} />*/}
        {/*</Routes>*/}
        {/*<AppFooter />*/}
      </AuthProvider>
    </Router>
  );
}

export default App;
