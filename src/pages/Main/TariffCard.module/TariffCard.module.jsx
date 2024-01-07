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
      <div className={styles.infoText}>Для небольшого исследования</div>
      <div className={styles.currentTariffLabel}>Текущий тариф</div>


      <div className={styles.includedItems}>
        <div className={styles.item}>В тариф входит:</div>
        <div>
          <img className={styles.icon} src={icon1} alt="icon" />
          <span className={styles.item1} >Безлимитная история запросов</span>
        </div>

        <div>
          <img className={styles.icon} src={icon2} alt="icon" />
          <span className={styles.item2}>Безопасная сделка</span>
        </div>

        <div>
          <img className={styles.icon} src={icon3} alt="icon" />
          <span className={styles.item3}>Поддержка 24/7</span>
        </div>
      </div>
      <div className={styles.title}>Beginner</div>
      <div className={styles.decorativeElements}>
        <div className={styles.triangle}></div>
        <div className={styles.line}></div>
        <div className={styles.smallRectangle}></div>
        <div className={styles.bigRectangle}></div>
        <div className={styles.ellipse}></div>
        <div className={styles.blueRectangle}></div>
        <div className={styles.whiteRectangle}></div>
        <div className={styles.additionalRectangle}></div>
      </div>
    </div>
  );
}

export default TariffCard;
