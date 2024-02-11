// Main/SecondTitleText/SecondTitleText.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './SecondTitleText.module.scss';

const SecondTitleText = () => {
  return (
    <TitleTextBlock
      text="наши тарифы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default SecondTitleText;