// App.jsx
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

import {useAuth} from "./hooks/AuthContext";


import Footer from './components/Footer/Footer';
import user_pic_example from './assets/user_pic_example.png';
import '../src/styles/App.css';

import './fonts/ferry.otf';
import './fonts/InterRegular.ttf';
import './fonts/InterMedium.ttf';
import './fonts/InterBold.ttf';
import Authorization from "./components/Authorization/Authorization";
import Header from "./components/Header";

function App() {
  const { isLoggedIn, checkAuthStatus } = useAuth();
  const [userTariff, setUserTariff] = useState('beginner');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState(user_pic_example);

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Пользователь не вошёл");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} userName={userName} setUserName={setUserName} userPicture={userPicture} setUserPicture={setUserPicture} />
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} userTariff={userTariff} />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/search" element={isLoggedIn ? <Search /> : <Authorization redirectBack="/search" />} />
        <Route path="/results" element={isLoggedIn ? <SearchResults /> : <Authorization redirectBack="/results" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
