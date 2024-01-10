// LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import styles from './LoginForm.module.scss';
import Button from '../../../components/UI/Button/Button';


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
    <section>
      <div className={styles.container}>

        <div className={styles.enter}>
          <div className={styles.enter1}>
            Войти
          </div>
          <div className={styles.enter2}>
            Зарегистрироваться
          </div>
        </div>

        <label >
          <span className={styles.enterText}>
            Логин или номер телефона:
          </span>
          <input type="text" className={styles.input} value={login} onChange={(e) => setLogin(e.target.value)}/>
        </label>

        <br/>
        <label>
          <span className={styles.enterText}>
            Пароль:
          </span>
          <input type="password" className={styles.input} value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>


        <Button type="button" className={styles.button} onClick={handleLoginClick}>
        <span className={styles.buttonText}>
          Войти
        </span>
        </Button>
      </div>
    </section>

  );
};

export default LoginForm;
