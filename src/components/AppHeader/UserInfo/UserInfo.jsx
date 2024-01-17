// UserInfo/UserInfo.jsx

import React from 'react';
import styles from './UserInfo.module.scss';
import Button from '../../UI/Button/Button';
import AvatarImg from '../../../assets/images/Avatar.svg';

const UserInfo = ({ userInfo, handleLogout }) => (
  <div className={styles.userInfo}>
    <img src={AvatarImg} alt="Аватар" className={styles.avatar} />

    {/* Вывод данных о пользователе */}

    <Button onClick={handleLogout}>Выйти</Button>
  </div>
);

export default UserInfo;
