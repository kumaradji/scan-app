// SearchPageCharacters.jsx
import React from 'react';
import styles from './SearchPageCharacters.module.scss';
import imgSearchPageCharacters from '../../../../src/assets/images/SearchPageCharacters.svg';


const SearchPageCharacters: string = () => {
  return (
    <div className={styles.imgLoginPageCharacters}>
      <img src={imgSearchPageCharacters} alt="SearchPageCharacters-Image" />
    </div>
  );
};

export default SearchPageCharacters;
