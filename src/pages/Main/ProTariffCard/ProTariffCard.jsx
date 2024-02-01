// ProTariffCard/ProTariffCard.jsx

import React from 'react';
import styles from './ProTariffCard.module.scss';
import TargetTariffIcon from '../../../assets/icons/TargetTariff.svg';
import ItemsList from "../../../assets/images/ProTariffList.jpeg";

function ProTariffCard() {
  const handleMoreButtonClick = () => {
    // Пустая функция-заглушка для события клика кнопки
  };
  return (
    <section className={styles.container}>
      <div className={styles.container__greenTop}/>
      <img className={styles.container__greenTop_iconTarget} src={TargetTariffIcon} alt="=TargetTariff-Icon"/>

      <div className={styles.container__title}>
        Pro
      </div>

      <div className={styles.container__moreButton} onClick={handleMoreButtonClick}>
        <div className={styles.container__moreButton_moreText}>
          Подробнее
        </div>
      </div>

      <div className={styles.container__infoTextTitle}>
        Для HR и фрилансеров
      </div>

      <div className={styles.container__priceTitle}>
        <div className={styles.container__priceTitle_infoText}>
          <span className={styles.container__priceTitle_price}>
            1 299 ₽
          </span>
          <span className={styles.container__priceTitle_priceHigh}>
            2 600 ₽
          </span>
          <p className={styles.container__priceTitle_currency}>
            или 279 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
      </div>

      <img className={styles.container__tariffItemsList} src={ItemsList} alt="ItenmsList"/>

    </section>
  );
}

export default ProTariffCard;
