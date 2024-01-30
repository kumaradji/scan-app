// UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import {Link, NavLink} from 'react-router-dom';
import SlashImg from '../../../assets/images/Slash.svg';

const UnauthenticatedUserPanel = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/login" className={styles.container_link}>
        Зарегистрироваться
      </NavLink>
      <span>
        <img src={SlashImg} alt="Slash" className={styles.container_slash} />
      </span>
      <Link to="/login">
        <button className={styles.container_button}>
          Войти
        </button>
      </Link>
    </div>
  );
};

export default UnauthenticatedUserPanel;


