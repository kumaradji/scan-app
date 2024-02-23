// PasswordInput/PasswordInput.jsx

import React from 'react';
import styles from '../LoginForm.module.scss';

function PasswordInput({ value, onChange }) {
  return (
    <>
      <input
        type="password"
        className={styles.loginForm__inputField}
        value={value}
        onChange={onChange}
      />
      <div className={styles.loginForm__errorPasswordText}>
        Неправильный пароль
      </div>
    </>
  );
}

export default PasswordInput;
