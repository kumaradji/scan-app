// LoginPage/TitleTextBlock03/TitleTextBlock03.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextBlock03.module.scss';

const TitleTextBlock03 = () => {

  return (
    <TitleTextBlock
      text={`
        Для оформления подписки
        на тариф, необходимо
        авторизоваться.
      `}
      additionalStyles={styles.titleTextBlock03}
    >
      <span className="title-text">
        {/* здесь текст не нужен */}
      </span>
    </TitleTextBlock>
  );

};

export default TitleTextBlock03;