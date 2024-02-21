// PasswordInput/PasswordInput.jsx

import React from 'react';
import styles from '../LoginForm.module.scss';

function PasswordInput({ value, onChange }) {
  // Функция для обработки изменения значения в поле ввода пароля
  return (
    <input
      type="password"
      className={styles.loginForm__inputField}
      value={value}
      onChange={onChange}
    />
  );
}

export default PasswordInput;
