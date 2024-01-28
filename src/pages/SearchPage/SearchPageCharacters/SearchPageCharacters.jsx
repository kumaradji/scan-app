// SearchPageCharacters.jsx
import React from 'react';
import styles from './SearchPageCharacters.module.scss';
import imgSearchPageCharacters from '../../../../src/assets/images/SearchPageCharacters.svg';


const SearchPageCharacters = () => {
  return (
    <div className={styles.imgSearchPageCharacters}>
      <img src={imgSearchPageCharacters} alt="SearchPageCharacters-Image" />
    </div>
  );
};

export default SearchPageCharacters;
