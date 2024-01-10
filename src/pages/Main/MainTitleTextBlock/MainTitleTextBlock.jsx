// Main/MainTitleTextBlock/MainTitleTextBlock.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './MainTitleTextBlock.module.scss';

const MainTitleTextBlock = () => {
  return (
    <TitleTextBlock
      text="Почему именно мы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default MainTitleTextBlock;