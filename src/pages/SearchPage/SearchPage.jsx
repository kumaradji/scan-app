// SearchPage.jsx

import React from 'react';
import styles from './SearchPage.module.scss';
import '../../styles/_fonts.scss';
import SearchPageCharacters from "./SearchPageCharacters/SearchPageCharacters";
import SearchFormCard from "./SearchFormCard/SearchFormCard";
import Document from '../../assets/images/Document.svg';
import Folders from '../../assets/images/Folders.svg';
import TitleTextBlock from "../../components/TitleTextBlock/TitleTextBlock";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__leftColumn}>

        <TitleTextBlock
          text="Найдите необходимые данные в пару кликов."
          additionalStyles={styles.searchPage__leftColumn_titleSearchTextBlock}
        />

        <div className={styles.searchPage__leftColumn_leftTextUnderTitleBlock}>
          Задайте параметры поиска.
          <br/>
          Чем больше заполните, тем точнее поиск
        </div>

        <div>
          <SearchFormCard/>
        </div>
      </div>
      <div className={styles.searchPage__rightColumn}>
        <div className={styles.searchPage__rightColumn_document}>
          <img src={Document} alt="Document"/>
        </div>
        <div className={styles.searchPage__rightColumn_folders}>
          <img src={Folders} alt="Folders"/>
        </div>
      </div>

      <div>
        <SearchPageCharacters/>
      </div>
    </div>
  );
};

export default SearchPage;
