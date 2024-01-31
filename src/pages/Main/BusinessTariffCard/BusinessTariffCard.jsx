// BusinessTariffCard/BusinessTariffCard.jsx

import React from 'react';
import styles from './BusinessTariffCard.module.scss';
import NotebookTariffIcon from '../../../assets/icons/NotebookTariff.svg';
import icon1 from '../../../assets/icons/SmallVectorTariff.svg';
import icon2 from '../../../assets/icons/SmallVectorTariff.svg';
import icon3 from '../../../assets/icons/SmallVectorTariff.svg';

function BusinessTariffCard() {
  const handleMoreButtonClick = () => {
    // Пустая функция-заглушка для события клика кнопки
  };

  return (
    <section className={styles.container}>
      <div className={styles.blackTop} />
      <img className={styles.iconNotebook} src={NotebookTariffIcon} alt="=TargetTariff-Icon" />
      <div className={styles.moreBusinessButton} onClick={handleMoreButtonClick}>
        <div className={styles.moreText}>
          Подробнее
        </div>
      </div>
      <div className={styles.infoTextTitle}>
        Для корпоративных клиентов
      </div>

      <div className={styles.includedItems}>
        <div className={styles.item}>
          В тариф входит:
        </div>
        <div>
          <img className={styles.icon} src={icon1} alt="icon" />
          <span className={styles.item1} >
            Все пункты тарифа Pro
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon2} alt="icon" />
          <span className={styles.item2}>
            Безлимитное количество запросов
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon3} alt="icon" />
          <span className={styles.item3}>
            Приоритетная поддержка
          </span>
        </div>
      </div>
      <div className={styles.title}>
        Business
      </div>
      <div className={styles.infoText}>
        <span className={styles.price}>
          2 379 ₽
        </span>
        <span className={styles.priceHigh}>
          3 700 ₽
        </span>

      </div>
    </section>
  );
}

export default BusinessTariffCard;
