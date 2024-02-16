// LoginInput.jsx

import styles from '../LoginForm.module.scss';

function LoginInput({ value, onChange }) {
  return (
    <input
      className={styles.loginForm__inputField}
      value={value}
      onChange={onChange}
    />
  );
}

export default LoginInput;