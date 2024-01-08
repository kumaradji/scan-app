// SearchPage.jsx

import React from 'react';
import styles from './SearchPage.module.scss';
import '../../fonts.scss';
import SearchTitleTextBlock from './SearchTitleTextBlock/SearchTitleTextBlock';
import SearchPageCharacters from "./SearchPageCharacters/SearchPageCharacters";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div>
        <SearchTitleTextBlock />
        <div>
          <SearchPageCharacters />
        </div>
      </div>

    </div>
  );
};

export default SearchPage;
