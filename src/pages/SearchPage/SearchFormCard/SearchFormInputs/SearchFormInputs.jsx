// SearchFormInputs.jsx
import React, {useState} from 'react';
import useSearchFormHook from "../../../../hooks/useSearchFormHook";
import DateInput from '../DateInput/DateInput';
import styles from './SearchFormInputs.module.scss';

function SearchFormInputs() {
  // Импортируем константы из хука
  const {
    inn,
    setInn,
    tonality,
    setTonality,
    documentCount,
    setDocumentCount,
  } = useSearchFormHook();

  // Локальный state для ошибки валидации
  const [innError, setInnError] = useState(false);

  // Функция валидации ИНН
  const validateInn = (value) => {
    if (!/^\d+$/.test(value)) {
      // Если есть не цифры - ошибка
      return false;
    }

    if (value.length !== 10 && value.length !== 12) {
      // Неправильная длина
      return false;
    }

    return true;
  };

  const handleInnChange = (e) => {
    setInn(e.target.value);
  };

  const handleInnBlur = () => {
    if (!validateInn(inn)) {
      setInnError(true);
    } else {
      setInnError(false);
    }
  };

  return (
    <section className={styles.searchFormCard}>
      <label>
        <div className={styles.searchFormCard__inn}>
          <div className={styles.searchFormCard__inn_label}>
            ИНН компании
          </div>
          <div className={styles.searchFormCard__inn_label_star}>
            *
          </div>
        </div>
        <input
          className={styles.searchFormCard__inn_input}
          type="text"
          value={inn}
          onChange={handleInnChange}
          onBlur={handleInnBlur}
        />
        {innError && <div
          className={styles.searchFormCard__inn__errorLabel}>
          Введите корректные данные
        </div>}
      </label>

      <label>
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
      </label>

      <label>
        <div className={styles.searchFormCard__documentCount}>
          <div className={styles.searchFormCard__documentCount_label}>
            Количество документов в выдаче
          </div>
          <div className={styles.searchFormCard__documentCount_label_star}>
            *
          </div>
        </div>
        <input
          className={styles.searchFormCard__documentCount_input}
          type="number"
          value={documentCount}
          onChange={(e) => setDocumentCount(e.target.value)}
        />
        <div className={styles.searchFormCard__documentCount__errorLabel}>
          Обязательное поле
        </div>
      </label>

      <div className={styles.searchFormCard__dateInputs}>
        <DateInput />
      </div>
    </section>
  );
}

export default SearchFormInputs;
