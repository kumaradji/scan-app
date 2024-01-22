// pages/ResultPage/LeftSmallText/LeftSmallText.jsx

import React from 'react';
import styles from './LeftSmallText.module.scss';

const LeftSmallText = () => {
  return (
    <div className={styles.leftTextUnderTitleBlock}>
      <div className={styles.leftSmallText}>
        Поиск может занять некоторое время,
        <br/>
        просим сохранять терпение.
      </div>
    </div>
  );
};

export default LeftSmallText;