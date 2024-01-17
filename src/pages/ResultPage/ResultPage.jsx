// pages/ResultPage/ResultPage.jsx

import React from 'react';

import styles from './ResultPage.module.scss';
import TitleTextBlock04 from "./TitleTextBlock04";
import ImageRightBlock from "./ImageRightBlock";

const ResultPage = () => {


  return (
    <div className={styles.resultPage}>
      <div className={styles.container}>
        <TitleTextBlock04/>
        <ImageRightBlock/>
      </div>

      <div className={styles.leftTextUnderTitleBlock}>
        <div className={styles.leftSmallText}>
          Поиск может занять некоторое время,
          <br/>
          просим сохранять терпение.
        </div>
      </div>


    </div>
  );
};

export default ResultPage;
