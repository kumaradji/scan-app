// LoginInput.jsx

import styles from '../LoginForm.module.scss';

function LoginInput({value, onChange, error}) {
  return (
    <>
      <input
        className={styles.loginForm__inputField}
        value={value}
        onChange={onChange}
      />
      {error &&
        <div className={styles.loginForm__errorLoginText}>
        Введите корректные данные
      </div>}
    </>
  );
}

export default LoginInput;