// AuthInput.jsx
import React, {useState} from 'react';
import styles from './AuthInput.module.scss';

function AuthInput({ type, value, onChange, label }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <div className={styles.enterLoginText}>{label}</div>
      <input
        type={type}
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default AuthInput;
