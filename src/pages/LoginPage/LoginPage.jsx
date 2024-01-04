// LoginPage.jsx

import React from 'react';
import styles from './LoginPage.module.scss';
import '../../fonts.scss';
import LoginForm from './LoginForm/LoginForm';
import TitleTextBlock03 from './TitleTextBlock-03/TitleTextBlock-03';
import LoginPageCharacters from './LoginPageCharacters/LoginPageCharacters';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div>
        <TitleTextBlock03 />
        <div>
          <LoginPageCharacters />
        </div>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
