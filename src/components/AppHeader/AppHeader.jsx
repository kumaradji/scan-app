// AppHeader.jsx

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './AppHeader.module.scss';
import LogoImg from '../../assets/images/Logo.svg';
import AvatarImg from '../../assets/images/Avatar.svg'; // Замените на путь к изображению аватара
import { logout, getUserInfo } from '../../api/auth'; // Замените на вашу логику аутентификации

const AppHeader = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Функция для получения информации о пользователе
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo(); // Замените на ваш запрос
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
    // Функция для выхода из системы
    logout(); // Замените на вашу логику выхода
    setUserInfo(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>

        <span>
          <img
            src={LogoImg}
            alt="Логотип"
          />
        </span>

        <nav className={styles['nav-links']}>
          <Link to="/" className={styles.navLink}>Главная</Link>
          <span className={`${styles.navLink} ${styles.disabled}`}>Тарифы</span>
          <span className={`${styles.navLink} ${styles.disabled}`}>FAQ</span>
        </nav>

        <div className={styles.auth}>
          {userInfo ? (
            <>
              <div className={styles.userPanel}>
                {/* Показывать лоадер, пока информация о пользователе не загружена */}
                {loading ? (
                  <div className={styles.loader}></div>
                ) : (
                  <>
                    <div className={styles.userLimit}>
                      Лимит: {userInfo.companyLimit}
                    </div>
                    <div className={styles.usedCompanies}>
                      Используемо: {userInfo.usedCompanies}
                    </div>
                  </>
                )}
              </div>
              <img
                src={AvatarImg}
                alt="Аватар пользователя"
                className={styles.avatar}
              />
              <Button onClick={handleLogout}>Выйти</Button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={styles.navLink}>Зарегистрироваться</NavLink>
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
