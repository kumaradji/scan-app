import React from 'react';
import styles from './AppFooter.module.scss';
import FooterLogoImg from '../../assets/images/Logo-footer.svg';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>
          <img src={FooterLogoImg} alt="Логотип футера" />
        </span>

        <div className={styles.textBlock}>
          <span className={styles.textMoskow}>г. Москва, </span>
          <span>Цветной б-р, 40</span>
          <p>+7 495 771 21 11</p>
          <p>info@skan.ru</p>
          <br />
          <span className={styles.textCopyright}>Copyright. 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
