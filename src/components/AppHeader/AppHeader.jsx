// AppHeader.jsx

import React, {useEffect, useState} from 'react';
import styles from './AppHeader.module.scss';
import {useAuth} from '../../pages/LoginPage/Auth/AuthContext';
import HeaderContent from './HeaderContent/HeaderContent';
import AuthenticatedUserInfo from './AuthenticatedUserInfo/AuthenticatedUserInfo';
import UnauthenticatedUserPanel from './UnauthenticatedUserPanel/UnauthenticatedUserPanel';
import {getUserInfo} from "../../api/auth";

const AppHeader = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
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
    logout();
    setLoading(false);
  };

  if (loading) {
    return <div>Loading user info...</div>;
  }

  return (
    <header className={styles.header}>
      <>
        <HeaderContent />
        {user ? (
          <AuthenticatedUserInfo userInfo={user} handleLogout={handleLogout} />
        ) : (
          <UnauthenticatedUserPanel />
        )}
      </>
    </header>
  );
};

export default AppHeader;
