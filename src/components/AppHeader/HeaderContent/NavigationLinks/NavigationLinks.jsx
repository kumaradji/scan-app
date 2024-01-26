// NavigationLinks.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../HeaderContent.module.scss';

const NavigationLinks = () => {
  return (
    <div className={styles.header__content__navLinks}>
      <Link to="/" className={styles.header__navLink}>
        Главная
      </Link>
      <span className={`${styles.header__navLink} ${styles.disabled}`}>
          Тарифы
      </span>
      <span className={`${styles.header__navLink} ${styles.disabled}`}>
          FAQ
      </span>
    </div>
  );
};

export default NavigationLinks;
