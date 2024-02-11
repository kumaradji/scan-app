import React from 'react';
import styles from './AppFooter.module.scss';
import FooterLogoImg from '../../assets/images/Logo-footer.svg';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
        <span className={styles.footer__logo}>
          <img src={FooterLogoImg} alt="Логотип футера" />
        </span>

        <div className={styles.footer__textBlock}>
          <span className={styles.footer__textAddress}>
            г. Москва, Цветной б-р, 40 <br />
            +7 495 771 21 11 <br />
            info@skan.ru
          </span>

          <p className={styles.footer__copyright}>
            Copyright. 2022
          </p>

        </div>
    </footer>
  );
};

export default AppFooter;
