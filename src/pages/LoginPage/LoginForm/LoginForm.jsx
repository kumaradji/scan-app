// LoginForm.jsx
import React, {useState} from 'react';
import {useAuth} from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import Button from '../../../components/UI/Button';
import BoldLine from '../../../assets/icons/BoldLine.svg';
import Line from '../../../assets/icons/Line.svg';
import imgGoogle from '../../../assets/images/Google.svg';
import imgFacebook from '../../../assets/images/imgFacebook.svg';
import imgYandex from '../../../assets/images/imgYandex.svg';
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput/PasswordInput";

const LoginForm = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();

  const handleLoginClick = async () => {
    try {
      await handleLogin(login, password);
      console.log('Logging in with:', login, password); // Проверка значений
      if (onSuccess) {
        onSuccess();

        console.log('Login success!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Добавьте обработку ошибки, например, отображение сообщения пользователю
    }
  };

  const handleLoginInputChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    console.log('Current password:', newPassword);
  };

  return (
    <section className={styles.loginForm}>
      <div className={styles.loginForm__enterText}>
        <div className={styles.loginForm__login}>
          Войти
        </div>
        <img
          className={styles.loginForm__boldLine}
          src={BoldLine}
          alt="Line"
        />

        <div className={styles.loginForm__signup}>
          Зарегистрироваться
        </div>
        <img
          className={styles.loginForm__line}
          src={Line}
          alt="line"
        />
      </div>

      <label>
        <div className={styles.loginForm__enterLoginText}>
          Логин или номер телефона:
        </div>
        <LoginInput
          value={login}
          onChange={handleLoginInputChange}
        />

      </label>
      <br/>
      <label>
        <div className={styles.loginForm__enterPasswordText}>
          Пароль:
        </div>
        <PasswordInput
          value={password}
          onChange={setPassword}
        />

        {/*<PasswordInput*/}
        {/*  value={password}*/}
        {/*  onChange={handlePasswordInputChange}*/}
        {/*/>*/}
      </label>
      <br/>

      <Button
        className={styles.loginForm__button}
        onClick={handleLoginClick}
      >
        <div className={styles.loginForm__button_text}>
          Войти
        </div>
      </Button>

      <span
        className={`
        ${styles.loginForm__recoverPass} 
        ${styles.disabled}
        `}
      >
        Восстановить пароль
      </span>

      <div className={styles.loginForm__enterSmallText}>
        Войти через
      </div>

      <div className={styles.loginForm__socialIcons}>
        <img
          className={styles.loginForm__socialIcons_google}
          src={imgGoogle}
          alt="imgGoogle"
        />
        <img
          className={styles.loginForm__socialIcons_facebook}
          src={imgFacebook}
          alt="imgFacebook"
        />
        <img
          className={styles.loginForm__socialIcons_yandex}
          src={imgYandex}
          alt="imgYandex"
        />
      </div>
    </section>
  );
};

export default LoginForm;
