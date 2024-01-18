// src/components/AppHeader/UnauthenticatedUserPanel/UnauthenticatedUserPanel.jsx
import React from 'react';
import styles from './UnauthenticatedUserPanel.module.scss';
import Loader from '../../Loader/Loader';
import userPanelRect from "../../../assets/icons/userPanelRect.svg";

const UnauthenticatedUserPanel = ({ userInfo, loading }) => {
  const isLoggedIn = !!userInfo;

  // Функция для выхода пользователя
  const handleLogout = () => {
    // Ваш код для выхода пользователя
    console.log('Выход пользователя');
  };

  return (
    <div className={styles.userPanel}>
      <img className={styles.userPanelRect} src={userPanelRect} alt="userPanelRect" />

      {loading ? (
        <Loader />
      ) : (
        <>
          {isLoggedIn ? (
            <div className={styles.userInfoContainer}>
              <img src={userInfo.avatar} alt="Аватар пользователя" className={styles.avatar}/>
              <div onClick={handleLogout} className={styles.logoutText}>
                Выйти
              </div>
            </div>
          ) : (
            <div className={styles.notLoggedInContainer}>
              <button className={styles.loginButton}>Войти</button>
              <span className={styles.registerText}>Зарегистрироваться</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UnauthenticatedUserPanel;
