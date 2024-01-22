// LoginPage/TitleTextBlock04/TitleTextBlock04.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextBlock04.module.scss';

const TitleTextBlock04 = () => {

  return (
    <TitleTextBlock
      text={`
        Ищем. Скоро будут результаты
      `}
      additionalStyles={styles.titleTextBlock04}
    >
      <span className="title-text">
        {/* здесь текст не нужен */}
      </span>
    </TitleTextBlock>
  )
};

export default TitleTextBlock04;