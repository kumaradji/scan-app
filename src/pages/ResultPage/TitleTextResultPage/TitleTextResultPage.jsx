// LoginPage/TitleTextResultPage/TitleTextResultPage.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextResultPage.module.scss';

const TitleTextResultPage = () => {

  return (
    <main className={styles.titleTextResultPage}>
      <TitleTextBlock
        text={`
        Ищем. Скоро будут результаты
      `}
        additionalStyles={styles.titleResultPage}
      >
      <span className={styles.titleTextResultPage__text}>
        {/* здесь текст не нужен */}
      </span>
      </TitleTextBlock>

      <div className={styles.titleTextResultPage__leftSmallText}>
        Поиск может занять некоторое время,
        <br/>
        просим сохранять терпение.
      </div>
    </main>
  )
};

export default TitleTextResultPage;
