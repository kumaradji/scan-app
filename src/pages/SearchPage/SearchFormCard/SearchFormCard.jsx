// SearchFormCard/SearchFormCard.jsx
import React, { useState } from 'react';
import styles from './SearchFormCard.module.scss';
import Button from "../../../components/UI/Button";
import * as SearchForm from "../../../api/search";
import DateInput from "../DateInput/DateInput";

function SearchFormCard() {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tonality, setTonality] = useState('');
  const [documentCount, setDocumentCount] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

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
          ИНН компании:
        </div>
        <input
          className={styles.container__inn}
          type="text"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />

        <div className={styles.container__tonality__label}>
          Тональность
        </div>
        <input
          className={styles.container__tonality}
          type="text"
          value={tonality}
          onChange={(e) => setTonality(e.target.value)}
        />

        <div className={styles.container__documentCount__label}>
          Количество документов в выдаче
        </div>
        <input
          className={styles.container__documentCount}
          type="number"
          value={documentCount}
          onChange={(e) => setDocumentCount(e.target.value)}
        />

        <div className={styles.container__label}>
          Диапазон поиска
        </div>

        <div className={styles.container__dateInputs}>
          <div className={styles.container__dateInputs__label}>
            <DateInput
              selectedDate={startDate}
              onChange={handleStartDateChange}
              placeholder="Дата начала"
            />
          </div>

          <div className={styles.container__dateInputs__label}>
            <DateInput
              selectedDate={endDate}
              onChange={handleEndDateChange}
              placeholder="Дата конца"
            />
          </div>
        </div>
      </label>

      <Button className={styles.container__searchButton} onClick={handleSearchClick}>
        <div className={styles.container__searchButton__text}>
          Поиск
        </div>
      </Button>
    </div>
  );
}

export default SearchFormCard;
