// SearchFormInputs.jsx
import React from 'react';
import useSearchFormHook from "../../../../hooks/useSearchFormHook";
import DateInput from '../DateInput/DateInput';
import styles from './SearchFormInputs.module.scss';

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
    <section className={styles.searchFormCard}>
      <label>
        <div className={styles.searchFormCard__inn_label}>
          ИНН компании:*
        </div>
        <input
          className={styles.searchFormCard__inn_input}
          type="text"
          value={inn}
          onChange={(e) => setInn(e.target.value)}
        />
      </label>

      <section className={styles.searchFormCard__tonality}>
        <div className={styles.searchFormCard__tonality_label}>
          Тональность
        </div>
        <select
          className={styles.searchFormCard__tonality_input}
          value={tonality}
          onChange={(e) => setTonality(e.target.value)}
        >
          <option value="any">Любая</option>
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
        </select>
      </section>

      <section className={styles.searchFormCard__documentCount}>
        <div className={styles.searchFormCard__documentCount_label}>
          Количество документов в выдаче*
        </div>

        <div className={styles.searchFormCard__documentCount__errorLabel}>
          Обязательное поле
        </div>

        <input
          className={styles.searchFormCard__documentCount_input}
          type="number"
          value={documentCount}
          onChange={(e) => setDocumentCount(e.target.value)}
        />
      </section>

      <div className={styles.searchFormCard__leftBlockLabel}>
        Диапазон поиска*
      </div>

      <div className={styles.searchFormCard__dateInputs}>
        <DateInput/>
      </div>
    </section>
  )
}

export default SearchFormInputs;
