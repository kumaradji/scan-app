// UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import Button from '../../UI/Button/Button';
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
        <Button className={styles.button}>Войти</Button>
      </Link>
    </div>
  );
};

export default UnauthenticatedUserPanel;
