//

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './SecondTextResultPage.module.scss';

const SecondTextResultPage = () => {
  return (
    <TitleTextBlock
      text="Общая сводка"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default SecondTextResultPage;