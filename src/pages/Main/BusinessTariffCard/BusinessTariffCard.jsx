// BusinessTariffCard/BusinessTariffCard.jsx

import React, {useState} from 'react';
import styles from './BusinessTariffCard.module.scss';
import NotebookTariffIcon from '../../../assets/icons/NotebookTariff.svg';
import ItemsList from "../../../assets/images/BisinessTariffList.jpeg";

function BusinessTariffCard() {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => {
    setIsActive(true);
  };
  const onMouseUp = () => {
    setIsActive(false);
  };

  return (
    <section className={styles.businessTariffCard}>
      <div className={styles.businessTariffCard__blackTop}/>
        <img className={styles.businessTariffCard__iconNotebook} src={NotebookTariffIcon} alt="=TargetTariff-Icon"/>

      <div className={styles.businessTariffCard__title}>
        Business
      </div>

      <div
        className={`
          ${styles.businessTariffCard__moreBusinessButton} 
          ${isActive && styles.businessTariffCard__moreBusinessButton_active}
        `}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className={styles.businessTariffCard__moreText}>
          Подробнее
        </div>
      </div>
      
      <div className={styles.businessTariffCard__priceTitle}>
        <div className={styles.businessTariffCard__infoText}>
          <span className={styles.businessTariffCard__price}>
            2 379 ₽
          </span>
          <span className={styles.businessTariffCard__priceHigh}>
            3 700 ₽
          </span>
        </div>
      </div>

      <img className={styles.businessTariffCard__tariffItemsList} src={ItemsList} alt="ItenmsList"/>

    </section>
  );
}

export default BusinessTariffCard;
