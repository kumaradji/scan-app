// AppHeader.jsx

import React, {useEffect, useState} from 'react';
import styles from './AppHeader.module.scss';
import {getUserInfo, logout} from '../../api/auth';
import HeaderContent from './HeaderContent/HeaderContent';
import AuthenticatedUserInfo from './AuthenticatedUserInfo/AuthenticatedUserInfo';
import UnauthenticatedUserPanel from './UnauthenticatedUserPanel/UnauthenticatedUserPanel';

const AppHeader = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ username: 'sf_student1' });

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
    console.log('Logging out...');
    logout();
    console.log('User info set to null');
    setUserInfo(null);
    console.log('User info:', userInfo);
  };

  return (
    <header className={styles.header}>
      <>
        <HeaderContent />

        {userInfo ? (
          <AuthenticatedUserInfo userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <UnauthenticatedUserPanel />
        )}

      </>
    </header>
  );
};

export default AppHeader;
