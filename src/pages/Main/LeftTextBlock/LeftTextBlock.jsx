// components/LeftTextBlock/LeftTextBlock.jsx

import React from 'react';
import styles from './LeftTextBlock.module.scss';

const LeftTextBlock = () => {
  return (
    <div className={styles.leftTextBlock}>
      <div className={styles.leftText}>
        <p>
          сервис по поиску публикаций
          <br/>
          о компании
          <br/>
          по его ИНН
        </p>
      </div>
    </div>
  );
};

export default LeftTextBlock;