// AppHeader.jsx

import React, {useEffect, useState} from 'react';
import styles from './AppHeader.module.scss';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext'; // Импортируем useAuth
import HeaderContent from './HeaderContent/HeaderContent';
import AuthenticatedUserInfo from './AuthenticatedUserInfo/AuthenticatedUserInfo';
import UnauthenticatedUserPanel from './UnauthenticatedUserPanel/UnauthenticatedUserPanel';

const AppHeader = () => {
  const { user, logout } = useAuth(); // Используем хук useAuth

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // По мере необходимости, можно использовать user из контекста,
        // но здесь, вероятно, вы хотите снова использовать getUserInfo
        // для актуальных данных пользователя после входа
        // const response = await getUserInfo();
        // setUserInfo(response.data.eventFiltersInfo);

        // Замечание: Здесь также необходимо обновить состояние пользователя
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    logout(); // Используем logout из контекста
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className={styles.header}>
      <>
        <HeaderContent />

        {user ? (
          <AuthenticatedUserInfo
            userInfo={user} // Используем информацию о пользователе из контекста
            handleLogout={handleLogout}
          />
        ) : (
          <UnauthenticatedUserPanel />
        )}
      </>
    </header>
  );
};

export default AppHeader;
