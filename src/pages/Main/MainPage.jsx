// pages/Main/MainPage.jsx

import React from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';
import TitleTextBlock from './TitleTextBlock/TitleTextBlock';
import Carousel from '../../components/Carousel/Carousel';

import styles from './MainPage.module.scss';
import '../../fonts.scss';
import BlueCloudImage from "./BlueCloudImage/BlueCloudImage";
import MainTitleTextBlock from "./TitleTextBlock/TitleTextBlock";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.upperBlocks}>
        <LeftTextBlock />
        <ImageRightBlock />
      </div>

      <MainTitleTextBlock />
      <Carousel />

      <BlueCloudImage />
      {/* Пример использования без кастомных стилей */}
      <TitleTextBlock text="Некоторый текст" />

    </div>
  );
};

export default MainPage;
