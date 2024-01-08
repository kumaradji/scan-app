// pages/Main/MainPage.jsx

import React from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';
import MainTitleTextBlock from './MainTitleTextBlock/MainTitleTextBlock';
import Carousel from '../../components/Carousel/Carousel';

import styles from './MainPage.module.scss';
import '../../fonts.scss';
import BlueCloudImage from "./BlueCloudImage/BlueCloudImage";
import TitleTextBlock02 from "./SecondTitleTextBlock/SecondTitleTextBlock";
import BeginnerTariffCard from "./BeginnerTariffCard/BeginnerTariffCard";
import BusinessTariffCard from "./BusinessTariffCard/BusinessTariffCard";
import ProTariffCard from "./ProTariffCard/ProTariffCard";

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

      <section className={styles.tariffCardSection}>
        <BeginnerTariffCard />
        <ProTariffCard />
        <BusinessTariffCard />
      </section>

    </div>
  );
};

export default MainPage;
