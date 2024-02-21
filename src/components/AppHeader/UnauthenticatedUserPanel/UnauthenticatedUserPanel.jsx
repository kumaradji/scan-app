// UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import {Link} from 'react-router-dom';
import SlashImg from '../../../assets/images/Slash.svg';

const UnauthenticatedUserPanel = () => {
  return (
    <div className={styles.unauthenticatedUser}>
      <span className={styles.unauthenticatedUser__link_disabled}>
        Зарегистрироваться
      </span>
      <span>
        <img src={SlashImg} alt="Slash" className={styles.unauthenticatedUser__slash}/>
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
