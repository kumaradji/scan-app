// LoginInput.jsx

import styles from './LoginInput.module.scss';

function LoginInput({ value, onChange }) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
}

export default LoginInput;