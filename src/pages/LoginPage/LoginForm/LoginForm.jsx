// LoginForm/LoginForm.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm'; // Импортируем компонент AuthForm
import styles from './LoginForm.module.scss'; // Импортируем стили

function LoginForm() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* Внедряем компонент AuthForm и передаем ему колбэк для обработки успешного входа */}
        <AuthForm onSuccess={handleLoginSuccess} />
      </div>

      <div className={styles.switcher}>
        {/* переключатель */}
      </div>

      <div className={styles.fields}>
        {/* поля ввода */}
      </div>

      <Link to="" className={styles['forgot-pass']}>
        Восстановить пароль
      </Link>
    </div>
  );
}

export default LoginForm;
