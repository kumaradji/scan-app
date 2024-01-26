// SearchFormCardMobile/SearchFormCardMobile.jsx
import React, {useState} from 'react';
import * as SearchForm from '../../../../api/search';
import styles from '../SearchFormCard.module.scss';
import Button from "../../../../components/UI/Button";
import DateInput from "../DateInput/DateInput";
import useSearchFormHook from '../../../../hooks/useSearchFormHook';

function SearchFormCardMobile() {
  function SearchFormCardMobile() {
    const {
      inn,
      setInn,
      searchResults,
      setSearchResults,
      tonality,
      setTonality,
      documentCount,
      setDocumentCount,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      checkedItems,
      setCheckedItems,
      handleStartDateChange,
      handleEndDateChange,
      handleToggle,
      handleSearchClick,
    } = useSearchFormHook();

    return (
      <div className={styles.container}>
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

        <Button className={styles.searchButton} onClick={handleSearchClick}>
          <div className={styles.searchButton__ButtonText}>
            Поиск
          </div>
        </Button>

        <div className={styles.rightBlockSmallText}>
          * Обязательные к заполнению поля
        </div>
      </div>
    )
  }
}

export default SearchFormCardMobile;
