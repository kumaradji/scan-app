// FooterLogo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogoImg from '../../../assets/images/Logo-footer.svg';
import styles from './FooterLogo.module.css';

const FooterLogo = () => {
  return (
    <Link to="/" className={styles.footerLogo}>
      <img
        src={FooterLogoImg}
        alt="Логотип футера"
      />
    </Link>
  );
};

export default FooterLogo;
