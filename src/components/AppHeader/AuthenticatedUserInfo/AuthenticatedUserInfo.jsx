// AuthenticatedUserInfo.jsx
import React from 'react';
import styles from './AuthenticatedUserInfo.module.scss';
import AvatarImg from '../../../assets/images/Avatar.svg';

const AuthenticatedUserInfo = ({ userInfo, handleLogout }) => (
  <div className={styles.userInfo}>
    <img src={AvatarImg} alt="Аватар" className={styles.avatar}/>

    {/* Вывод данных о пользователе */}

    <div onClick={handleLogout} className={styles.logoutText}>
      Выйти
    </div>
  </div>
);

export default AuthenticatedUserInfo;
