// pages/ResultPage/ResultPage.jsx

import React, {useState} from 'react';
import styles from './ResultPage.module.scss';
import TitleTextResultPage from "./TitleTextResultPage";
import ImageRightBlock from "./ImageRightBlock";
import TitleTextBlock from "../../components/TitleTextBlock/TitleTextBlock";
import ResultRectLoading from "../../assets/images/ResultRectLoading.png";
import ResultCard from "./ResultCard/ResultCard";

const ResultPage = () => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => {
    setIsActive(true);
  };
  const onMouseUp = () => {
    setIsActive(false);
  };

  const countVariants = 4730;

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

        <div className={styles.resultPage__resultsCountText}>
          Найдено {countVariants} вариантов
        </div>

        <div className={styles.resultPage__resultRectLoading}>
          <img src={ResultRectLoading} alt="ResultRectLoading-Image"/>
        </div>

        <TitleTextBlock
          text="Список документов"
          additionalStyles={styles.resultPage__titleTextBlock02}
        />

        <ResultCard />


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
