// pages/ResultPage/ResultPage.jsx

import React from 'react';

import styles from './ResultPage.module.scss';
import TitleTextBlock04 from "./TitleTextBlock04";
import ImageRightBlock from "./ImageRightBlock";
import LeftSmallText from "./LeftSmallText/LeftSmallText";

const ResultPage = () => {


  return (
    <section className={styles.resultPage}>
      <div className={styles.container}>
        <TitleTextBlock04 />
        <ImageRightBlock />

        <LeftSmallText />
      </div>


    </section>
  );
};

export default ResultPage;
