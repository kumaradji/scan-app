// DateInput.jsx
import React, {useEffect, useState} from "react";
import styles from "./DateInput.module.scss";
import dateInputIcon from "../../../../assets/icons/dateInputIcon.svg";

const DateInput = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [error, setError] = useState('');
  const [inputTypeStart, setInputTypeStart] = useState('text');
  const [inputTypeEnd, setInputTypeEnd] = useState('text');

  useEffect(() => {
    validateDateRange();
  }, [startDate, endDate]);

  const validateDateRange = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (!startDate || !endDate) {
      setError("Обязательное поле");
    } else if (new Date(startDate) > new Date(endDate)) {
      setError("Введите корректные данные");
    } else if (new Date(startDate) > currentDate || new Date(endDate) > currentDate) {
      setError("Дата не может быть позже текущей даты");
    } else {
      setError("");
    }
  };

  return (
    <>
      <section className={styles.dateInput}>
        <div className={styles.dateInput__startDate}>
          <div className={styles.dateInput__inputWrapper}>
            <input
              type={inputTypeStart}
              onFocus={() => setInputTypeStart('date')}
              onBlur={() => {
                validateDateRange();
                if (!startDate) setInputTypeStart('text');
              }}
              id="startDate"
              name="startDate"
              placeholder="Дата начала"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={error ? 'error' : ''}
            />
            <img
              className={styles.dateInput__dateInputIcon}
              src={dateInputIcon}
              alt=""
            />
          </div>
        </div>

        <div className={styles.dateInput__endDate}>
          <div className={styles.dateInput__inputWrapper}>
          <input
              type={inputTypeEnd}
              onFocus={() => setInputTypeEnd('date')}
              onBlur={() => {
                validateDateRange();
                if (!endDate) setInputTypeEnd('text');
              }}
              id="endDate"
              name="endDate"
              placeholder="Дата конца"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={error ? 'error' : ''}
            />
            <img
              className={styles.dateInput__dateInputIcon}
              src={dateInputIcon}
              alt=""
            />
          </div>
        </div>
        {error &&
          <div className={styles.dateInput__errorLabel}>
            {error}
          </div>
        }
      </section>
    </>
  );
}

export default DateInput;


