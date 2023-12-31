// AppFooter.jsx

import React from 'react';
import FooterLogo from './FooterLogo/FooterLogo';
import styles from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <FooterLogo />

        <div className={styles.textBlock}>
          <p>г. Москва, Цветной б-р, 40</p>
          <p>+7 495 771 21 11</p>
          <p>info@skan.ru</p>
        </div>

      </div>
    </footer>
  );
};

export default AppFooter;
