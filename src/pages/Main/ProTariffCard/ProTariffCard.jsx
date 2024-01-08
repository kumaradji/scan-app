// ProTariffCard/ProTariffCard.jsx

import React from 'react';
import styles from './ProTariffCard.module.scss';
import TargetTariffIcon from '../../../assets/icons/TargetTariff.svg';
import icon1 from '../../../assets/icons/SmallVectorTariff.svg';
import icon2 from '../../../assets/icons/SmallVectorTariff.svg';
import icon3 from '../../../assets/icons/SmallVectorTariff.svg';

function ProTariffCard() {
  return (
    <div className={styles.container}>
      <div className={styles.greenTop}/>
      <img className={styles.iconTarget} src={TargetTariffIcon} alt="=TargetTariff-Icon"/>
      <div className={styles.moreButton}>
        <div className={styles.moreText}>
          Подробнее
        </div>
      </div>
      <div className={styles.infoTextTitle}>
        Для HR и фрилансеров
      </div>

      <div className={styles.includedItems}>
        <div className={styles.item}>
          В тариф входит:
        </div>
        <div>
          <img className={styles.icon} src={icon1} alt="icon" />
          <span className={styles.item1} >
            Все пункты тарифа Beginner
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon2} alt="icon" />
          <span className={styles.item2}>
            Экспорт истории
          </span>
        </div>
        <div>
          <img className={styles.icon} src={icon3} alt="icon" />
          <span className={styles.item3}>
            Рекомендации по приоритетам
          </span>
        </div>
      </div>
      <div className={styles.title}>
        Pro
      </div>
      <div className={styles.infoText}>
        <span className={styles.price}>
          1 299 ₽
        </span>
        <span className={styles.priceHigh}>
          2 600 ₽
        </span>
        <p className={styles.currency}>
          или 279 ₽/мес. при рассрочке на 24 мес.
        </p>

      </div>
    </div>
  );
}

export default ProTariffCard;
