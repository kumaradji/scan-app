// HeaderContent.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderContent.module.scss';
import LogoImg from '../../../assets/images/Logo.svg';
import BurgerImg from '../../../assets/icons/BublikMenu-mobile.svg';

const HeaderContent = () => {
  return (
    <span className={styles.header__content}>
      <span>
        <img className={styles.header__content_logo} src={LogoImg} alt="Логотип"/>
      </span>

      <span>
        <img className={styles.header__content_burger} src={BurgerImg} alt="Логотип"/>
      </span>

      <nav className={styles.header__content__navLinks}>
        <Link to="/" className={styles.header__navLink}>
          Главная
        </Link>
        <span className={`${styles.header__navLink} ${styles.disabled}`}>
          Тарифы
        </span>
        <span className={`${styles.header__navLink} ${styles.disabled}`}>
          FAQ
        </span>
      </nav>
    </span>
  );
};

export default HeaderContent;
