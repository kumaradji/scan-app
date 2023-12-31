// Logo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/Logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src={LogoImg}
        alt="Логотип"
      />
    </Link>
  );
};

export default Logo;

