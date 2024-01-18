// AppHeader.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import LogoImg from '../../assets/images/Logo.svg';
import { logout, getUserInfo } from '../../api/auth';
import AuthenticatedUserInfo from './AuthenticatedUserInfo/AuthenticatedUserInfo';
import UnauthenticatedUserPanel from './UnauthenticatedUserPanel/UnauthenticatedUserPanel';

const AppHeader = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({username: 'sf_student1'});

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
    console.log("Logging out...");
    logout();
    console.log("User info set to null");
    setUserInfo(null);
    console.log("User info:", userInfo);
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

        <div className={styles.auth}>
          {userInfo ? (
            <AuthenticatedUserInfo userInfo={userInfo} handleLogout={handleLogout} />
          ) : (
            <UnauthenticatedUserPanel />
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
