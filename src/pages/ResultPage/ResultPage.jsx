// pages/ResultPage/ResultPage.jsx

import React, {useState} from 'react';

import styles from './ResultPage.module.scss';
import TitleTextResultPage from "./TitleTextResultPage";
import ImageRightBlock from "./ImageRightBlock";
import TitleTextBlock from "../../components/TitleTextBlock/TitleTextBlock";

const ResultPage = () => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => {
    setIsActive(true);
  };
  const onMouseUp = () => {
    setIsActive(false);
  };

  return (
    <main className={styles.resultPage}>
      <div className={styles.resultPage__upperBlocks}>
        <TitleTextResultPage/>
        <ImageRightBlock/>
      </div>

      <div className={styles.resultPage__secondBlock}>

        <TitleTextBlock
          text="Общая сводка"
          additionalStyles={styles.resultPage__titleTextBlock01}
        />

        <TitleTextBlock
          text="Список документов"
          additionalStyles={styles.resultPage__titleTextBlock02}
        />






        <div
          className={`
          ${styles.resultPage__moreButton} 
          ${isActive && styles.resultPage__moreButton_active}
        `}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          <div className={styles.resultPage__moreText}>
            Показать больше
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
