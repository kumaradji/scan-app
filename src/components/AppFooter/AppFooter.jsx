import React from 'react';
import styles from './AppFooter.module.scss';
import FooterLogoImg from '../../assets/images/Logo-footer.svg';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
        <span className={styles.logo}>
          <img src={FooterLogoImg} alt="Логотип футера" />
        </span>

        <div className={styles.textBlock}>
          <div style={{ width: '100%', textAlign: 'right' }}>
            <span className={styles.textMoskow}>г. Москва, </span>
            <>
              Цветной б-р, 40 <br />
              +7 495 771 21 11 <br />
              info@skan.ru
            </>
            <p className={styles.textCopyright}>Copyright. 2022</p>
          </div>
        </div>
    </footer>
  );
};

export default AppFooter;
