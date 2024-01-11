// LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import LoginInput from "./LoginInput/LoginInput";
import PasswordInput from "./PasswordInput/PasswordInput";
import Button from "../../../components/UI/Button";
import BoldLine from '../../../assets/icons/BoldLine.svg';
import Line from "../../../assets/icons/Line.svg";
import imgGoogle from "../../../assets/images/Google.svg";
import imgFacebook from "../../../assets/images/imgFacebook.svg";
import imgYandex from "../../../assets/images/imgYandex.svg";

const LoginForm = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();

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

  const handleLoginInputChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.enter}>
          <div className={styles.enter1}>
            Войти
          </div>
          <img className={styles.boldLine}
               src={BoldLine}
               alt="Line"
          />
          <div className={styles.enter2}>
            Зарегистрироваться
          </div>
          <img className={styles.line}
               src={Line}
               alt="line"
          />
        </div>

        <label>
          <div className={styles.enterLoginText}>
            Логин или номер телефона:
          </div>
          <LoginInput value={login} onChange={handleLoginInputChange}/>
        </label>
        <br/>
        <label>
          <div className={styles.enterPasswordText}>
            Пароль:
          </div>
          <PasswordInput value={password} onChange={handlePasswordInputChange}/>
        </label>
        <br/>

        <Button className={styles.button} onClick={handleLoginClick}>
          <div className={styles.buttonText}>
            Войти
          </div>
        </Button>

        <span className={`${styles.recoverPass} ${styles.disabled}`}>
            Восстановить пароль
        </span>

        <div className={styles.enterText}>
          Войти через
        </div>

        <div className={styles.socialIcons}>
          <img className={styles.google}
               src={imgGoogle}
               alt="imgGoogle"
          />
          <img className={styles.facebook}
               src={imgFacebook}
               alt="imgFacebook"
          />
          <img className={styles.yandex}
               src={imgYandex}
               alt="imgYandex"
          />

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
