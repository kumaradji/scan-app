// pages/Main/MainPage.jsx
import React from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';

import styles from './MainPage.module.css';

import '../../fonts.css';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
        <LeftTextBlock />

        <ImageRightBlock />
      {/* Другие компоненты или контент */}
    </div>
  );
};

export default MainPage;
