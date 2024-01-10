// components/UI/PadLock/PadLock.jsx

import React from 'react';
import classNames from 'classnames'; // Если не установлен, установите через npm install classnames
import styles from './PadLock.module.scss';
import LogoImg from "../../../assets/icons/padlock.svg";


const PadLock = ({ children, className }) => {
  // Используйте classNames для объединения классов
  const padLockClasses = classNames(styles.padLock, className);

  return (
    <img className={styles.padLock}
         src={LogoImg}
         alt="Замок"
    />
  );
};

export default PadLock;
