// TariffCard/TariffCard.jsx

import React from 'react';
import styles from './TariffCard.module.scss'; // Import styles

function TariffCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cardBackground} />
      <div className={styles.orangeTop} />
      <div className={styles.blueStripe} />
      <div className={styles.personalCabinetButton}>
        <div className={styles.personalCabinetText}>
          Перейти в личный кабинет
        </div>
      </div>
      <div className={styles.infoText}>Для небольшого исследования</div>
      <div className={styles.currentTariffLabel}>Текущий тариф</div>
      <div className={styles.includedItems}>
        <div className={styles.item1}>В тариф входит:</div>
        <div className={styles.item2}>Безлимитная история запросов</div>
        <div className={styles.item3}>Безопасная сделка</div>
        <img className={styles.icon1} src="https://via.placeholder.com/20x20" alt="icon" />
        <img className={styles.icon2} src="https://via.placeholder.com/20x20" alt="icon" />
        <img className={styles.icon3} src="https://via.placeholder.com/20x20" alt="icon" />
        <div className={styles.supportLabel}>Поддержка 24/7</div>
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
