// Input.jsx

import styles from './Input.module.scss';

function Input({ value, onChange }) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;