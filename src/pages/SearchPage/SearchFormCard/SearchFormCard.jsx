// SearchFormCard/SearchFormCard.jsx
import React, { useState } from 'react';
import styles from './SearchFormCard.module.scss';
import Button from "../../../components/UI/Button";
import * as SearchForm from "../../../api/search";

function SearchFormCard() {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = async () => {
    try {
      const results = await SearchForm.searchCompaniesByINN(inn, { /* дополнительные фильтры */ });
      setSearchResults(results);
    } catch (error) {
      console.error('Ошибка при поиске компаний:', error);
    }
  };

  return (
    <div className={styles.searchFormCard}>
      <label className={styles.container}>
        <div className={styles.container__inn__label}>
          Введите ИНН компании:
        </div>
        <input className={styles.container__inn}
               type="text"
               value={inn}
               onChange={(e) => setInn(e.target.value)}
        />
      </label>

      <Button className={styles.searchButton} onClick={handleSearchClick}>
        <div className={styles.searchFormCard__ButtonText}>
          Поиск
        </div>
      </Button>


      {/* Отображение результатов поиска */}
      {/*{searchResults.length > 0 && (*/}
      {/*  <div className={styles.searchResults}>*/}
      {/*    <p>Результаты поиска:</p>*/}
      {/*    <ul>*/}
      {/*      {searchResults.map((company) => (*/}
      {/*        <li key={company.sparkId}>*/}
      {/*          {company.fullName} - {company.shortName} - {company.isBranch ? 'Филиал' : 'Головная компания'}*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}

export default SearchFormCard;
