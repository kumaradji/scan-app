// HeaderContent.jsx

import React from 'react';
import styles from './HeaderContent.module.scss';
import LogoImg from '../../../assets/images/Logo.svg';
import BurgerImg from '../../../assets/icons/BublikMenu-mobile.svg';
import {Link} from "react-router-dom";

const HeaderContent = () => {
  return (

    <section className={styles.headerContent}>

      <div className={styles.headerContent__logo}>
        <img src={LogoImg} alt="Логотип"/>
      </div>

      <div className={styles.headerContent__burger}>
        <img src={BurgerImg} alt="Логотип"/>
      </div>

      <div className={styles.headerContent__menu}>
        <Link to="/" className={styles.headerContent__navLink}>
          Главная
        </Link>
        <span className={styles.headerContent__navLink_disabled}>
          Тарифы
        </span>
        <span className={styles.headerContent__navLink_disabled}>
         FAQ
        </span>
      </div>
    </section>
  );
};

export default HeaderContent;
