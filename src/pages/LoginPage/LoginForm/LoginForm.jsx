// LoginForm.jsx
import React, {useState} from 'react';
import {useAuth} from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import AuthInput from './AuthInput/AuthInput';
import Button from '../../../components/UI/Button';
import BoldLine from '../../../assets/icons/BoldLine.svg';
import Line from '../../../assets/icons/Line.svg';
import imgGoogle from '../../../assets/images/Google.svg';
import imgFacebook from '../../../assets/images/imgFacebook.svg';
import imgYandex from '../../../assets/images/imgYandex.svg';

const LoginForm = ({onSuccess}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const {handleLogin} = useAuth();

  const handleLoginClick = async () => {
    if (!handleLogin) {
      console.error('handleLogin method is not defined.');
      return;
    }

    await handleLogin(login, password);
    if (onSuccess) {
      onSuccess();
    }
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
        <AuthInput
          type="text"
          value={login}
          onChange={(value) => setLogin(value)}
          label="Логин или номер телефона:"
        />
      </label>
      <br/>
      <label>
        <AuthInput
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          label="Пароль:"
        />
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
