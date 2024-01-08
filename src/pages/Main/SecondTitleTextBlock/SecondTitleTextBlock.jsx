// Main/SecondTitleTextBlock/SecondTitleTextBlock.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './SecondTitleTextBlock.module.scss';

const SecondTitleTextBlock = () => {
  return (
    <TitleTextBlock
      text="наши тарифы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default SecondTitleTextBlock;