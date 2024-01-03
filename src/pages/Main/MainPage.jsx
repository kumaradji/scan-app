// pages/Main/MainPage.jsx

import React from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';
import MainTitleTextBlock from './TitleTextBlock-01/TitleTextBlock-01';
import Carousel from '../../components/Carousel/Carousel';

import styles from './MainPage.module.scss';
import '../../fonts.scss';
import BlueCloudImage from "./BlueCloudImage/BlueCloudImage";
import TitleTextBlock02 from "./TitleTextBlock-02/TitleTextBlock-02";

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
      <TitleTextBlock02 />

    </div>
  );
};

export default MainPage;
