// UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import { NavLink, Link } from 'react-router-dom';
import SlashImg from '../../../assets/images/Slash.svg';

const UnauthenticatedUserPanel = () => {
  return (
    <div className={styles.unauthenticatedUserPanel}>
      <NavLink to="/login" className={styles.navLink}>
        Зарегистрироваться
      </NavLink>
      <span>
        <img src={SlashImg} alt="Slash" className={styles.slash} />
      </span>
      <Link to="/login">
        <button className={styles.button}>Войти</button>
      </Link>
    </div>
  );
};

export default UnauthenticatedUserPanel;


