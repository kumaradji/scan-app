// UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import {Link, NavLink} from 'react-router-dom';
import SlashImg from '../../../assets/images/Slash.svg';

const UnauthenticatedUserPanel = () => {
  return (
    <div className={styles.unauthenticatedUser}>
      <NavLink to="/login" className={styles.unauthenticatedUser__link}>
        Зарегистрироваться
      </NavLink>
      <span>
        <img src={SlashImg} alt="Slash" className={styles.unauthenticatedUser__slash} />
      </span>
      <Link to="/login">
        <button className={styles.unauthenticatedUser__button}>
          Войти
        </button>
      </Link>
    </div>
  );
};

export default UnauthenticatedUserPanel;
