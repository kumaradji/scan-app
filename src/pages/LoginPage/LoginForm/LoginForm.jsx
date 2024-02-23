// LoginForm.jsx
import React, {useState} from 'react';
import {useAuth} from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import BoldLine from '../../../assets/icons/BoldLine.svg';
import Line from '../../../assets/icons/Line.svg';
import imgGoogle from '../../../assets/images/Google.svg';
import imgFacebook from '../../../assets/images/imgFacebook.svg';
import imgYandex from '../../../assets/images/imgYandex.svg';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput/PasswordInput';

const LoginForm = ({ onSuccess }) => {
  const { handleLogin, loginError, passwordError } = useAuth();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    try {
      await handleLogin(login, password);
      console.log('Logging in with:', login, password);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLoginInputChange = (e) => {
    setLogin(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordInputChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(login, newPassword);
  };

  const validateForm = (loginValue, passwordValue) => {
    const isLoginNotEmpty = typeof loginValue === 'string' && loginValue.trim() !== '';
    const isPasswordNotEmpty = typeof passwordValue === 'string' && passwordValue.trim() !== '';
    setIsFormValid(isLoginNotEmpty && isPasswordNotEmpty);
  };

  return (
    <section className={styles.loginForm}>
      <div className={styles.loginForm__enterText}>
        <div className={styles.loginForm__login}>Войти</div>
        <img className={styles.loginForm__boldLine} src={BoldLine} alt="Line" />
        <div className={styles.loginForm__signup}>Зарегистрироваться</div>
        <img className={styles.loginForm__line} src={Line} alt="line" />
      </div>

      <label>
        <div className={styles.loginForm__enterLoginText}>Логин или номер телефона:</div>
        <LoginInput value={login} onChange={handleLoginInputChange} error={loginError} />
      </label>
      <br />
      <label>
        <div className={styles.loginForm__enterPasswordText}>Пароль:</div>
        <PasswordInput value={password} onChange={handlePasswordInputChange} error={passwordError} />
      </label>
      <br />

      <button
        className={styles.loginForm__button}
        onClick={handleLoginFormSubmit}
        disabled={!isFormValid}
      >
        <div className={styles.loginForm__button_text}>Войти</div>
      </button>

      <span className={`${styles.loginForm__recoverPass} ${styles.disabled}`}>
        Восстановить пароль
      </span>

      <div className={styles.loginForm__enterSmallText}>Войти через</div>

      <div className={styles.loginForm__socialIcons}>
        <img className={styles.loginForm__socialIcons_google} src={imgGoogle} alt="imgGoogle" />
        <img className={styles.loginForm__socialIcons_facebook} src={imgFacebook} alt="imgFacebook" />
        <img className={styles.loginForm__socialIcons_yandex} src={imgYandex} alt="imgYandex" />
      </div>
    </section>
  );
};

export default LoginForm;
