// src/components/AppHeader/UserPanel/UserPanel.jsx
import React from 'react';
import styles from './UserPanel.module.scss';
import Loader from '../../Loader/Loader';
import userPanelRect from "../../../assets/icons/userPanelRect.svg";

const UserPanel = ({ userInfo, loading }) => {
  return (
    <div className={styles.userPanel}>
      <img className={styles.userPanelRect} src={userPanelRect} alt="userPanelRect" />

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.userInfoContainer}>
            {/* Проверка на существование userInfo и его свойств */}
            {userInfo && (
              <>
                <div className={styles.userInfoText}>
                  {userInfo.usedCompanies || "Заглушка для usedCompanies"}
                </div>

                <div className={`${styles.userInfoText} ${styles.usedCompaniesText}`}>
                  {userInfo.usedCompanies || "Заглушка для usedCompanies"}
                </div>

                <div className={`${styles.userInfoText} ${styles.companyLimitText}`}>
                  {userInfo.companyLimit || "Заглушка для companyLimit"}
                </div>

                <div className={`${styles.infoText} ${styles.usedCompaniesInfo}`}>
                  Использовано компаний
                </div>

                <div className={`${styles.infoText} ${styles.companyLimitInfo}`}>
                  Лимит по компаниям
                </div>

                {/* остальные элементы */}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserPanel;
