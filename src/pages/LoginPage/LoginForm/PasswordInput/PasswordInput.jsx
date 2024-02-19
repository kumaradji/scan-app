// PasswordInput/PasswordInput.jsx

import React from 'react';
import styles from '../LoginForm.module.scss';

function PasswordInput({ value, onChange }) {
  const handlePasswordChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="password"
      className={styles.loginForm__inputField}
      value={value}
      onChange={handlePasswordChange}
    />
  );
}

export default PasswordInput;
