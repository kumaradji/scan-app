// SearchPage.jsx

import React from 'react';
import styles from './SearchPage.module.scss';
import '../../fonts.scss';
import SearchTitleTextBlock from './SearchTitleTextBlock/SearchTitleTextBlock';
import SearchPageCharacters from "./SearchPageCharacters/SearchPageCharacters";
import SearchFormCard from "./SearchFormCard/SearchFormCard";
import Document from '../../assets/images/Document.svg';
import Folders from '../../assets/images/Folders.svg';

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.leftColumn}>
        <SearchTitleTextBlock/>
        <div className={styles.leftTextUnderTitleBlock}>
          <div className={styles.leftSmallText}>
            Задайте параметры поиска.
            <br/>
            Чем больше заполните, тем точнее поиск
          </div>
        </div>
        <div >
          <SearchFormCard/>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.document}>
          <img src={Document} alt="Document"/>
        </div>
        <div className={styles.folders}>
          <img src={Folders} alt="Folders"/>
        </div>
        <div>
          <SearchPageCharacters/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
