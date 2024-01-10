// LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import Input from "./Input/Input";


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


  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentContainer}>

        <div className={styles.enter}>
          <div className={styles.enter1}>
            Войти
          </div>
          <div className={styles.enter2}>
            Зарегистрироваться
          </div>
        </div>

        <div className={styles.enterHr}>
          <div className={styles.enter1Hr}>
            <hr/>
          </div>
          <div className={styles.enter2Hr}>
            <hr/>
          </div>
        </div>

        <label>
          Логин или номер телефона:
          <Input/>
        </label>
        {/*<label>*/}
        {/*  Логин или номер телефона:*/}
        {/*  <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>*/}
        {/*</label>*/}
        <br/>
        <label>
          Пароль:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>
        <button type="button" onClick={handleLoginClick}>
          Войти
        </button>
      </div>

    </div>
  );
};

export default LoginForm;
