// AppHeader.jsx
import React, {useEffect, useState} from 'react';
import styles from './AppHeader.module.scss';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext';
import HeaderContent from './HeaderContent/HeaderContent';
import AuthenticatedUserInfo from './AuthenticatedUserInfo/AuthenticatedUserInfo';
import UnauthenticatedUserPanel from './UnauthenticatedUserPanel/UnauthenticatedUserPanel';
import {getUserInfo} from "../../api/auth";

const AppHeader = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Проверяем наличие токена перед вызовом getUserInfo
        const token = localStorage.getItem('accessToken');
        if (token) {
          const response = await getUserInfo();
          setLoading(false);
        } else {
          console.error('Access token not found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <header className={styles.header}>
      <>
        <HeaderContent />
        {user ? (
          <AuthenticatedUserInfo userInfo={user} />
        ) : (
          <UnauthenticatedUserPanel />
        )}
      </>
    </header>
  );
};

export default AppHeader;
