// AppHeader.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './AppHeader.module.scss';
import LogoImg from "../../assets/images/Logo.svg";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>

        <span>
          <img
            src={LogoImg}
            alt="Логотип"
          />
        </span>

        <nav className={styles['nav-links']}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <span className={`${styles.navLink} ${styles.disabled}`}>Тарифы</span>
          <span className={`${styles.navLink} ${styles.disabled}`}>FAQ</span>
        </nav>

        <div className={styles.auth}>
          <NavLink to="/register" className={styles.navLink}>Зарегистрироваться</NavLink>
          <Button>Войти</Button>
        </div>

      </div>
    </header>
  );
};

export default AppHeader;
