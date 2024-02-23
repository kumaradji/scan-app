// LoginInput.jsx

import styles from '../LoginForm.module.scss';

function LoginInput({value, onChange, error}) {
  return (
    <>
      <input
        className={`${styles.loginForm__inputField} ${error ? styles.loginForm__inputField_error : ''}`}
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