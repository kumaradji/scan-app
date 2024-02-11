// Main/FirstTitleText/FirstTitleText.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './FirstTitleText.module.scss';

const FirstTitleText = () => {
  return (
    <TitleTextBlock
      text="Почему именно мы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default FirstTitleText;