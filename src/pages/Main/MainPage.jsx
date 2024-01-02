// pages/Main/MainPage.jsx
import React from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';
import TitleTextBlock from './TitleTextBlock/TitleTextBlock';
import Carousel from '../../components/Carousel/Carousel';

import styles from './MainPage.module.scss';
import '../../fonts.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.upperBlocks}>
        <LeftTextBlock />
        <ImageRightBlock />
      </div>

      <TitleTextBlock />
      <Carousel />

    </div>
  );
};

export default MainPage;
