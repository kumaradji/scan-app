// PasswordInput/PasswordInput.jsx

import React, { useState } from 'react'; // Import React
import styles from './PasswordInput.module.scss';

function PasswordInput() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <input
      type="password"
      className={styles.input}
      value={password}
      onChange={handlePasswordChange}
    />
  );
}

export default PasswordInput;
