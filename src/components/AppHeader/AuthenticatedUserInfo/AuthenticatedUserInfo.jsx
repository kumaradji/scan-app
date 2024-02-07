import React from 'react';
import styles from './AuthenticatedUserInfo.module.scss';
import AvatarImg from '../../../assets/images/Avatar.svg';
import userPanelRect from '../../../assets/images/userPanelRect.svg';
import Loader from "../../Loader/Loader";

const AuthenticatedUserInfo = ({userInfo, handleLogout}) => {
  const isLoggedIn = !!userInfo;
  const loading = false;
  const usedCompanies = 34;
  const companyLimit = 100;

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__userPanel}>
        {/* Фоновый прямоугольник */}
        <img
          className={styles.userInfo__userPanelRect}
          src={userPanelRect}
          alt="userPanelRect"
        />

        {/* Текстовые элементы внутри фонового прямоугольника */}
        {loading ? (
          <Loader/>
        ) : (
          <>
            {isLoggedIn && (
              <div className={styles.userInfo__userPanelRect__companyInfo}>
                <div className={styles.userInfo__userPanelRect__companyInfoUsed}>
                  {usedCompanies}
                </div>
                <div className={styles.userInfo__userPanelRect__companyInfoLimit}>
                  {companyLimit}
                </div>
                <div className={styles.userInfo__userPanelRect__companyInfoTextUsed}>
                  Использовано компаний
                </div>
                <div className={styles.userInfo__userPanelRect__companyInfoTextLimit}>
                  Лимит по компаниям
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.userInfo__userPanelTextContainer}>
        <div className={styles.userInfo__userPanelTextContainer__userNameText}>
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