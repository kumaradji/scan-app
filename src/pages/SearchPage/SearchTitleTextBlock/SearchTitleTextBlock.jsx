// Main/SearchTitleTextBlock/SearchTitleTextBlock.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './SearchTitleTextBlock.module.scss';

const SearchTitleTextBlock = () => {
  return (
    <TitleTextBlock
      text="Найдите необходимые данные в пару кликов."
      additionalStyles={styles.titleSearchTextBlock}
    />
  );
};

export default SearchTitleTextBlock;