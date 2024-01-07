// TariffCard/TariffCard.jsx

import React from 'react';
import styles from './TariffCard.module.scss';
import LightBulbIcon from '../../../assets/icons/LightBulbTariff.svg';
import icon1 from '../../../assets/icons/SmallVectorTariff.svg';
import icon2 from '../../../assets/icons/SmallVectorTariff.svg';
import icon3 from '../../../assets/icons/SmallVectorTariff.svg';


function TariffCard() {
  return (
    <div className={styles.container}>
      <div className={styles.orangeTop}/>
      <img className={styles.iconLightBulb} src={LightBulbIcon} alt="=Lightbulb-Icon"/>
      <div className={styles.blueStripe}/>
      <div className={styles.personalCabinetButton}>
        <div className={styles.personalCabinetText}>
          Перейти в личный кабинет
        </div>
      </div>
      <div className={styles.infoTextTitle}>
        Для небольшого исследования
      </div>
      <div className={styles.currentTariffLabel}>Текущий тариф</div>

      <div className={styles.includedItems}>
        <div className={styles.item}>
          В тариф входит:
        </div>
        <div>
          <img className={styles.icon} src={icon1} alt="icon" />
          <span className={styles.item1} >
            Безлимитная история запросов
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon2} alt="icon" />
          <span className={styles.item2}>
            Безопасная сделка
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon3} alt="icon" />
          <span className={styles.item3}>
            Поддержка 24/7
          </span>
        </div>
      </div>
      <div className={styles.title}>Beginner</div>
      <div className={styles.infoText}>
        <span className={styles.price}>799 ₽</span>
        <span className={styles.priceHigh}>1 200 ₽</span>
        <p className={styles.currency}>
          или 150 ₽/мес. при рассрочке на 24 мес.
        </p>

      </div>
    </div>
  );
}

export default TariffCard;
