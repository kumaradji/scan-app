// pages/ResultPage/ResultPage.jsx

import React from 'react';

import styles from './ResultPage.module.scss';
import TitleTextResultPage from "./TitleTextResultPage";
import ImageRightBlock from "./ImageRightBlock";
import LeftSmallText from "./LeftSmallText/LeftSmallText";

const ResultPage = () => {


  return (
    <section className={styles.resultPage}>
      <>
        <TitleTextResultPage />
        <ImageRightBlock />
        <LeftSmallText />
      </>

    </section>
  );
};

export default ResultPage;
