// LoginForm/LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import styles from './LoginForm.module.scss';

function LoginForm() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* Передаем колбэк handleLoginSuccess в AuthForm */}
        <AuthForm onSuccess={handleLoginSuccess} />
      </div>

      {/* Остальные части компонента LoginForm */}
    </div>
  );
}

export default LoginForm;
