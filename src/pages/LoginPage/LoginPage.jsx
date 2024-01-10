// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.scss';
import LoginForm from './LoginForm/LoginForm';
import TitleTextBlock03 from './TitleTextBlock03/TitleTextBlock03';
import LoginPageCharacters from './LoginPageCharacters/LoginPageCharacters';
import PadLock from '../../../src/components/UI/PadLock/PadLock';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Перенаправляем пользователя на главную страницу после успешного входа
    navigate('/');
  };

  return (
    <div className={styles.loginPage}>
      <div>
        <TitleTextBlock03 />
        <div>
          <LoginPageCharacters />
        </div>
      </div>

      <PadLock />

      <div>
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;