// Main/SearchTitleTextBlock/SearchTitleTextBlock.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './SearchTitleTextBlock.module.scss';

const SearchTitleTextBlock = () => {
  return (
    <TitleTextBlock
      text="Почему именно мы"
      additionalStyles={styles.titleTextBlock}
    />
  );
};

export default SearchTitleTextBlock;