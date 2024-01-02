// Main/TitleTextBlock-01/TitleTextBlock-01.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './TitleTextBlock-01.module.scss';

const MainTitleTextBlock = () => {
  return (
    <TitleTextBlock
      text="Почему именно мы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default MainTitleTextBlock;