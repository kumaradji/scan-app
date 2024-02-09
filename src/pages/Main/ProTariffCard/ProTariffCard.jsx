// ProTariffCard/ProTariffCard.jsx

import React, {useState} from 'react';
import styles from './ProTariffCard.module.scss';
import TargetTariffIcon from '../../../assets/icons/TargetTariff.svg';
import ItemsList from "../../../assets/images/ProTariffList.jpeg";

function ProTariffCard() {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => {
      setIsActive(true);
    };
    const onMouseUp = () => {
      setIsActive(false);
    };

  return (
    <section className={styles.proTariffCard}>
      <div className={styles.proTariffCard__greenTop}/>
      <img
        className={styles.proTariffCard__iconTarget}
        src={TargetTariffIcon} alt="=TargetTariff-Icon"
      />

      <div className={styles.proTariffCard__title}>
        Pro
      </div>

      <div
        className={`
          ${styles.proTariffCard__moreButton} 
          ${isActive && styles.proTariffCard__moreButton_active}
        `}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div className={styles.proTariffCard__moreText}>
          Подробнее
        </div>
      </div>

      <div className={styles.proTariffCard__infoTextTitle}>
        Для HR и фрилансеров
      </div>

      <div className={styles.proTariffCard__priceTitle}>
        <div className={styles.proTariffCard__infoText}>
          <span className={styles.proTariffCard__price}>
            1 299 ₽
          </span>
          <span className={styles.proTariffCard__priceHigh}>
            2 600 ₽
          </span>
          <p className={styles.proTariffCard__currency}>
            или 279 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
      </div>

      <img
        className={styles.proTariffCard__tariffItemsList}
        src={ItemsList}
        alt="ItenmsList"
      />
    </section>
  );
}

export default ProTariffCard;
