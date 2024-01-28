// SearchFormInputs.jsx
import React from 'react';
import useSearchFormHook from "../../../../hooks/useSearchFormHook";
import DateInput from '../DateInput/DateInput';
import styles from '../SearchFormCard.module.scss';

function SearchFormInputs() {
  const {
    inn,
    setInn,
    tonality,
    setTonality,
    documentCount,
    setDocumentCount,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
  } = useSearchFormHook();

  return (
  <label className={styles.leftBlock}>

    <section className={styles.leftBlock__inn}>
    <div className={styles.leftBlock__inn__label}>
      ИНН компании:*
    </div>
    <input
      className={styles.leftBlock__inn__input}
      type="text"
      value={inn}
      onChange={(e) => setInn(e.target.value)}
    />
    </section>

    <section className={styles.leftBlock__tonality}>
    <div className={styles.leftBlock__tonality__label}>
      Тональность
    </div>
    <input
      className={styles.leftBlock__tonality__input}
      type="text"
      value={tonality}
      onChange={(e) => setTonality(e.target.value)}
    />
    </section>

    <section className={styles.leftBlock__documentCount}>
    <div className={styles.leftBlock__documentCount__label}>
      Количество документов в выдаче*
    </div>
    <input
      className={styles.leftBlock__documentCount__input}
      type="number"
      value={documentCount}
      onChange={(e) => setDocumentCount(e.target.value)}
    />
    </section>

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
  )
}

export default SearchFormInputs;
