// BusinessTariffCard/BusinessTariffCard.jsx

import React from 'react';
import styles from './BusinessTariffCard.module.scss';
import NotebookTariffIcon from '../../../assets/icons/NotebookTariff.svg';
import ItemsList from "../../../assets/images/BisinessTariffList.jpeg";

function BusinessTariffCard() {
  const handleMoreButtonClick = () => {
    // Пустая функция-заглушка для события клика кнопки
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__blackTop}/>
      <img className={styles.container__blackTop_iconNotebook} src={NotebookTariffIcon} alt="=TargetTariff-Icon"/>

      <div className={styles.container__title}>
        Business
      </div>

      <div className={styles.container__moreBusinessButton} onClick={handleMoreButtonClick}>
        <div className={styles.container__moreBusinessButton_moreText}>
          Подробнее
        </div>
      </div>

      <div className={styles.container__infoTextTitle}>
        Для корпоративных клиентов
      </div>

      <div className={styles.container__priceTitle}>
        <div className={styles.container__priceTitle_infoText}>
          <span className={styles.container__priceTitle_price}>
            2 379 ₽
          </span>
          <span className={styles.container__priceTitle_priceHigh}>
            3 700 ₽
          </span>
        </div>
      </div>

      <img className={styles.container__tariffItemsList} src={ItemsList} alt="ItenmsList"/>

    </section>
  );
}

export default BusinessTariffCard;
