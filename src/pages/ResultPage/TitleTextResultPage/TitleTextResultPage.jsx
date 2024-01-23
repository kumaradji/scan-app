// LoginPage/TitleTextResultPage/TitleTextResultPage.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextResultPage.module.scss';

const TitleTextResultPage = () => {

  return (
    <TitleTextBlock
      text={`
        Ищем. Скоро будут результаты
      `}
      additionalStyles={styles.titleTextResultPage}
    >
      <span className="title-text">
        {/* здесь текст не нужен */}
      </span>
    </TitleTextBlock>
  )
};

export default TitleTextResultPage;
