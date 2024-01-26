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
        <div className={styles.userInfo__userPanelRect}>
          {/* Фоновый прямоугольник */}
          <img
            className={styles.userInfo__userPanelRectImg}
            src={userPanelRect}
            alt="userPanelRect"
          />

          {/* Текстовые элементы внутри фонового прямоугольника */}
          {loading ? (
            <Loader/>
          ) : (
            <>
              {isLoggedIn && (
                <div className={styles.userInfo__companyInfo}>
                  <div className={styles.userInfo__companyInfoUsed}>
                    {usedCompanies}
                  </div>
                  <div className={styles.userInfo__companyInfoLimit}>
                    {companyLimit}
                  </div>
                  <div className={styles.userInfo__companyInfoTextUsed}>
                    Использовано компаний
                  </div>
                  <div className={styles.userInfo__companyInfoTextLimit}>
                    Лимит по компаниям
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className={styles.userInfo__userPanelTextContainer}>
        <div className={styles.userInfo__userNameText}>
          Алексей А.
        </div>
        <div
          onClick={handleLogout}
          className={styles.userInfo__logoutText}
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