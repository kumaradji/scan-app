// SearchFormCard/SearchFormCard.jsx
import React, { useState } from 'react';
import styles from './SearchFormCard.module.scss';
import Button from "../../../components/UI/Button";
import * as SearchForm from "../../../api/search";
import DateInput from "./DateInput/DateInput";
import CheckboxList from "./CheckboxList/CheckboxList";

function SearchFormCard() {
  const [inn, setInn] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tonality, setTonality] = useState('');
  const [documentCount, setDocumentCount] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkedItems, setCheckedItems] = useState(Array(7).fill(false));

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleToggle = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
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
    <div className={styles.container}>

      {/*левая часть карточки*/}
      <label className={styles.leftBlock}>

        <div className={styles.leftBlock__inn__label}>
          ИНН компании:*
        </div>
        <input
          className={styles.leftBlock__inn__input}
          type="text"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />

        <div className={styles.leftBlock__tonality__label}>
          Тональность
        </div>
        <input
          className={styles.leftBlock__tonality__input}
          type="text"
          value={tonality}
          onChange={(e) => setTonality(e.target.value)}
        />

        <div className={styles.leftBlock__documentCount__label}>
          Количество документов в выдаче*
        </div>
        <input
          className={styles.leftBlock__documentCount__input}
          type="number"
          value={documentCount}
          onChange={(e) => setDocumentCount(e.target.value)}
        />

        <div className={styles.leftBlockLabel}>
          Диапазон поиска*
        </div>

        <div className={styles.leftBlock_dateInputs}>
        <DateInput
          selectedDate={startDate}
          onChange={handleStartDateChange}
          placeholder="Дата начала"
        />

        <DateInput
          selectedDate={endDate}
          onChange={handleEndDateChange}
          placeholder="Дата конца"
        />
        </div>
      </label>


      {/*правая часть картоки*/}
      <label className={styles.rightBlock}>

        <CheckboxList
          items={[
            'Признак максимальной полноты',
            'Упоминания в бизнес-контексте',
            'Главная роль в публикации',
            'Публикации только с риск-факторами',
            'Включать технические новости рынков',
            'Включать анонсы и календари',
            'Включать сводки новостей',
          ]}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />

        <Button className={styles.searchButton} onClick={handleSearchClick}>
          <div className={styles.searchButton__ButtonText}>
            Поиск
          </div>
        </Button>

      </label>


    </div>
);
}

export default SearchFormCard;
