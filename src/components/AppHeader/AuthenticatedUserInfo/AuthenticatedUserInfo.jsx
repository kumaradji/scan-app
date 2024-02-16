// AuthenticatedUserInfo.jsx

import React, {useEffect, useState} from 'react';
import styles from './AuthenticatedUserInfo.module.scss';
import AvatarImg from '../../../assets/images/Avatar.svg';
import userPanelRect from '../../../assets/images/userPanelRect.svg';
import Loader from "../../Loader/Loader";
import {getUserInfo} from '../../../api/auth';

const AuthenticatedUserInfo = ({ handleLogout }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        console.log('Response from server:', response); // Выводим ответ сервера в консоль
        setUserInfo(response.data.eventFiltersInfo);
        
      } catch (error) {
        console.error('Error fetching user info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!userInfo) {
    return <p>Информация о пользователе не найдена.</p>;
  }

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__userPanel}>
        <img
          className={styles.userInfo__userPanelRect}
          src={userPanelRect}
          alt="userPanelRect"
        />

        {userInfo && (
          <div className={styles.userInfo__userPanelRect__companyInfo}>
            <div className={styles.userInfo__userPanelRect__companyInfoUsed}>
              {userInfo.usedCompanyCount}
            </div>
            <div className={styles.userInfo__userPanelRect__companyInfoLimit}>
              {userInfo.companyLimit}
            </div>
            <div className={styles.userInfo__userPanelRect__companyInfoTextUsed}>
              Использовано компаний
            </div>
            <div className={styles.userInfo__userPanelRect__companyInfoTextLimit}>
              Лимит по компаниям
            </div>
          </div>
        )}
      </div>

      <div className={styles.userInfo__userPanelTextContainer}>
        <div className={styles.userInfo__userPanelTextContainer__userNameText}>
          {userInfo.userName}
        </div>
        <div
          onClick={handleLogout}
          className={styles.userInfo__userPanelTextContainer__logoutText}
        >
          Выйти
        </div>
      </div>

      <img
        src={AvatarImg}
        alt="Аватар"
        className={styles.userInfo__avatar}
      />
    </div>
  );
};

export default AuthenticatedUserInfo;
