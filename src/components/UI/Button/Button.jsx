// components/UI/Button/Button.jsx

import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
  // classNames для объединения классов
  const buttonClasses = classNames(styles.button, className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
