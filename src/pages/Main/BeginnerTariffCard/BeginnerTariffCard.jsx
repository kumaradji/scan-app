// BeginnerTariffCard/BeginnerTariffCard.jsx

import React from 'react';
import styles from './BeginnerTariffCard.module.scss';
import LightBulbIcon from '../../../assets/icons/LightBulbTariff.svg';
import ItemsList from '../../../assets/images/BigginerTariffList.jpeg';

function BeginnerTariffCard() {
  const handleMoreButtonClick = () => {
    // Пустая функция-заглушка для события клика кнопки
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__orangeTop}/>
      <img className={styles.container__orangeTop_iconLightBulb} src={LightBulbIcon} alt="Lightbulb-Icon"/>

      <div className={styles.container__title}>
        Beginner
      </div>

      <div className={styles.container__blueStripe}/>
      <div className={styles.container__currentTariffLabel}>
        Текущий тариф
      </div>

      <div className={styles.container__personalCabinetButton} onClick={handleMoreButtonClick}>
        <div className={styles.container__personalCabinetButton_personalCabinetText}>
          Перейти в личный кабинет
        </div>
      </div>

      <div className={styles.container__infoTextTitle}>
        Для небольшого исследования
      </div>

      <div className={styles.container__currentTariffLabel}>
        Текущий тариф
      </div>

      <div className={styles.container__priceTitle}>
        <div className={styles.container__priceTitle_infoText}>
          <span className={styles.container__priceTitle_price}>
            799 ₽
          </span>
          <span className={styles.container__priceTitle_priceHigh}>
            1 200 ₽
          </span>
          <p className={styles.container__priceTitle_currency}>
            или 150 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
      </div>

      <img className={styles.container__tariffItemsList} src={ItemsList} alt="ItenmsList"/>
    </section>
  );
}

export default BeginnerTariffCard;
