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
  } = useSearchFormHook();

  const validateInn = (input) => {
    const innRegExp = /^\d{10}|\d{12}$/; // Регулярное выражение для ИНН (10 или 12 цифр)
    return innRegExp.test(input);
  };

  const handleInnChange = (e) => {
    const inputValue = e.target.value;
    if (validateInn(inputValue) || inputValue === '') {
      setInn(inputValue);
    }
  };


  return (
    <section className={styles.container}>
      <section className={styles.container__inn}>
        <div className={styles.container__inn__label}>
          ИНН компании:*
        </div>
        <input
          className={styles.container__inn__input}
          type="text"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />
      </section>

      <section className={styles.container__tonality}>
        <div className={styles.container__tonality__label}>Тональность</div>
        <select
          className={styles.container__tonality__input}
          value={tonality}
          onChange={(e) => setTonality(e.target.value)}
        >
          <option value="any">Любая</option>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
        </select>
      </section>
      
      <section className={styles.container__documentCount}>
        <div className={styles.container__documentCount__label}>
          Количество документов в выдаче*
        </div>
        <input
          className={styles.container__documentCount__input}
          type="number"
          value={documentCount}
          onChange={(e) => setDocumentCount(e.target.value)}
        />
      </section>

      <div className={styles.container__leftBlockLabel}>
        Диапазон поиска*
      </div>

      <div className={styles.container__dateInputs}>
        <DateInput/>
      </div>
    </section>
  )
}

export default SearchFormInputs;
