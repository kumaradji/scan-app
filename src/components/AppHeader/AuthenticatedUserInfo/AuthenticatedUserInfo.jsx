// AuthenticatedUserInfo.jsx

import React, {useEffect, useState} from 'react';
import styles from './AuthenticatedUserInfo.module.scss';
import AvatarImg from '../../../assets/images/Avatar.svg';
import userPanelRect from '../../../assets/images/userPanelRect.svg';
import {getUserInfo} from '../../../api/auth';
import Loader from "../../Loader/Loader";
import {useAuth} from "../../../pages/LoginPage/Auth/AuthContext";

const AuthenticatedUserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const { handleLogout } = useAuth();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        if (response && response.eventFiltersInfo) {
          setUserInfo(response.eventFiltersInfo);
        } else {
          console.error('eventFiltersInfo is not available in the server response.');
          setUserInfo(null); // Обнуляем userInfo, чтобы избежать ошибок далее
        }
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
          {/*{userInfo.name}*/}
          Алексей А.
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
