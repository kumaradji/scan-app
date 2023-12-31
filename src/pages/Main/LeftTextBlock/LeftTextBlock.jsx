// components/LeftTextBlock/LeftTextBlock.jsx
import React from 'react';
import styles from './LeftTextBlock.module.css';

const LeftTextBlock = () => {
  return (
    <div className={styles.leftTextBlock}>
      <div className={styles.leftText}>
        <p>
          сервис по поиску публикаций о компании по его ИНН
        </p>
      </div>
    </div>
  );
};

export default LeftTextBlock;
