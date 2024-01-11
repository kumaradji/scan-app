// AppHeader.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './AppHeader.module.scss';
import LogoImg from '../../assets/images/Logo.svg';
import AvatarImg from '../../assets/images/Avatar.svg';
import SlashImg from '../../assets/images/Slash.svg';
import { logout, getUserInfo } from '../../api/auth';
import userPanelRect from "../../assets/icons/userPanelRect.svg";

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

        <div className={styles.auth}>
          {userInfo ? (
            <>
              <div className={styles.userPanel}>
                <img className={styles.userPanelRect}
                     src={userPanelRect}
                     alt="userPanelRect"
                />
                {loading ? (
                  <div className={styles.loader}></div>
                ) : (
                  <>
                    <div
                      style={{
                        width: 175,
                        height: 63,
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        opacity: 0.30,
                        background: '#D9D9D9',
                        borderRadius: 5,
                      }}
                    />
                    <div
                      style={{
                        left: 140,
                        top: 12,
                        position: 'absolute',
                        color: 'black',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        wordWrap: 'break-word',
                      }}
                    >
                      {userInfo.usedCompanies}
                    </div>
                    <div
                      style={{
                        left: 140,
                        top: 31,
                        position: 'absolute',
                        color: '#8AC540',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        wordWrap: 'break-word',
                      }}
                    >
                      {userInfo.companyLimit}
                    </div>
                    <div
                      style={{
                        left: 10,
                        top: 14,
                        position: 'absolute',
                        opacity: 0.40,
                        color: 'black',
                        fontSize: 10,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                      }}
                    >
                      Использовано компаний
                    </div>
                    <div
                      style={{
                        left: 27,
                        top: 33,
                        position: 'absolute',
                        opacity: 0.40,
                        color: 'black',
                        fontSize: 10,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word',
                      }}
                    >
                      Лимит по компаниям
                    </div>
                  </>
                )}
              </div>
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
