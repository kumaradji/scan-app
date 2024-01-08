// SearchPage.jsx

import React from 'react';
import styles from './SearchPage.module.scss';
import '../../fonts.scss';
import SearchTitleTextBlock from './SearchTitleTextBlock/SearchTitleTextBlock';
import SearchPageCharacters from "./SearchPageCharacters/SearchPageCharacters";
import SearchFormCard from "./SearchFormCard/SearchFormCard";
import Document from '../../assets/images/Document.svg';


const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div>

          <SearchTitleTextBlock/>
          <div className={styles.leftTextUnderTitleBlock}>
            <div className={styles.leftSmallText}>
              Задайте параметры поиска.
              <br/>
              Чем больше заполните, тем точнее поиск
            </div>

            <img className={styles.document} src={Document} alt="Document"/>

          </div>

        <div>
          <SearchFormCard />
        </div>

        <div>
          <SearchPageCharacters/>
        </div>
      </div>

    </div>
  );
};

export default SearchPage;
