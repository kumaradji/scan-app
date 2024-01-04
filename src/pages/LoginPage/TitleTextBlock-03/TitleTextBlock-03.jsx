// LoginPage/TitleTextBlock-03/TitleTextBlock-03.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextBlock-03.module.scss';

const TitleTextBlock03 = () => {
  return (
    <TitleTextBlock
      text={
        <>
          Для оформления подписки <br />
          на тариф, необходимо авторизоваться.
        </>
      }
      additionalStyles={styles.titleTextBlock03}
    />
  );
};

export default TitleTextBlock03;