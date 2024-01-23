// pages/ResultPage/ResultPage.jsx

import React from 'react';

import styles from './ResultPage.module.scss';
import TitleTextResultPage from "./TitleTextResultPage";
import ImageRightBlock from "./ImageRightBlock";
import LeftSmallText from "./LeftSmallText/LeftSmallText";
import SecondTextResultPage from "./SecondTextResultPage/SecondTextResultPage";

const ResultPage = () => {


  return (
    <section className={styles.resultPage}>
      <div className={styles.first_block}>
        <TitleTextResultPage />
        <ImageRightBlock />
        <LeftSmallText />
      </div>
      <div className={styles.second_block}>
        <SecondTextResultPage />

      </div>

    </section>
  );
};

export default ResultPage;
