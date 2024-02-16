// PasswordInput/PasswordInput.jsx

import React, {useState} from 'react';
import styles from '../LoginForm.module.scss';

function PasswordInput() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <input
      type="password"
      className={styles.loginForm__inputField}
      value={password}
      onChange={handlePasswordChange}
    />
  );
}

export default PasswordInput;
