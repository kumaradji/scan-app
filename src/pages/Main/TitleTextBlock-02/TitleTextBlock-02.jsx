// Main/TitleTextBlock-02/TitleTextBlock-02.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextBlock-02.module.scss';

const TitleTextBlock02 = () => {
  return (
    <TitleTextBlock
      text="наши тарифы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default TitleTextBlock02;