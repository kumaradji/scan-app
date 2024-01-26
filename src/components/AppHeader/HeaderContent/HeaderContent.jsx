// HeaderContent.jsx

import React from 'react';
import styles from './HeaderContent.module.scss';
import LogoImg from '../../../assets/images/Logo.svg';
import BurgerImg from '../../../assets/icons/BublikMenu-mobile.svg';
import NavigationLinks from "./NavigationLinks/NavigationLinks";

const HeaderContent = () => {
  return (

    <section className={styles.header__content}>

      <div className={styles.header__content__logo}>
        <img src={LogoImg} alt="Логотип"/>
      </div>

      <div className={styles.header__content__burger}>
        <img  src={BurgerImg} alt="Логотип"/>
      </div>

      <div className={styles.header__menu}>
        <NavigationLinks />
      </div>

    </section>
  );
};

export default HeaderContent;
