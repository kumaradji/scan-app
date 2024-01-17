// AppHeader.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './AppHeader.module.scss';
import LogoImg from '../../assets/images/Logo.svg';
import AvatarImg from '../../assets/images/Avatar.svg';
import SlashImg from '../../assets/images/Slash.svg';
import { logout, getUserInfo } from '../../api/auth';
import UserPanel from "../AppHeader/UserPanel/UserPanel";
import UserInfo from "../AppHeader/UserInfo/UserInfo";

const AppHeader = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    logout();
    setUserInfo(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <span>
          <img src={LogoImg} alt="Логотип" />
        </span>

        <nav className={styles['nav-links']}>
          <Link to="/" className={styles.navLink}>
            Главная
          </Link>
          <span className={`${styles.navLink} ${styles.disabled}`}>
            Тарифы
          </span>
          <span className={`${styles.navLink} ${styles.disabled}`}>
            FAQ
          </span>
        </nav>

        <UserPanel userInfo={userInfo} loading={loading} />

        <UserInfo userInfo={userInfo} handleLogout={handleLogout} />

        <div className={styles.auth}>
          {userInfo ? (
            <>
              <img src={AvatarImg} alt="Аватар пользователя" className={styles.avatar}/>
              <Button onClick={handleLogout}>Выйти</Button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={styles.navLink}>
                Зарегистрироваться
              </NavLink>
              <span>
                <img src={SlashImg} alt="Slash" className={styles.slash} />
              </span>
              <Link to="/login">
                <Button>Войти</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
