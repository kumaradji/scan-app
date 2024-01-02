// components/UI/Button/Button.jsx

import React from 'react';
import classNames from 'classnames'; // Если не установлен, установите через npm install classnames
import styles from './Button.module.scss';

const Button = ({ children, className }) => {
  // Используйте classNames для объединения классов
  const buttonClasses = classNames(styles.button, className);

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
