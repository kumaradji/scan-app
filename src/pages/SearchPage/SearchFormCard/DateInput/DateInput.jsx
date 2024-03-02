// DateInput.jsx
import React, {useState} from "react";
import {parse} from 'date-fns';
import styles from "./DateInput.module.scss";
import dateInputIcon from "../../../../assets/icons/dateInputIcon.svg";

function DateInput() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setError('');
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    setError('');
  };

  const validateDate = (date) => {
    const today = new Date();
    return date <= today;
  };

  const validateDateRange = (start, end) => {
    return start <= end;
  };

  const handleBlur = () => {
    const startDateIsValid = validateDate(parse(startDate, 'dd.MM.yyyy', new Date()));
    const endDateIsValid = validateDate(parse(endDate, 'dd.MM.yyyy', new Date()));
    const dateRangeIsValid = validateDateRange(parse(startDate, 'dd.MM.yyyy', new Date()), parse(endDate, 'dd.MM.yyyy', new Date()));

    if (!startDateIsValid || !endDateIsValid || !dateRangeIsValid) {
      setError('Введите корректные данные');
    }
  };

  return (
    <>
      <section className={styles.dateInput}>
        <div className={styles.dateInput__startDate}>
          <div className={styles.dateInput__inputWrapper}>
            <input
              type="text"
              value={startDate}
              onChange={handleStartDateChange}
              onBlur={handleBlur}
              placeholder="Дата начала"
              className={`${styles.dateInput__placeholder} ${error ? styles.error : ''}`}
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
              type="text"
              value={endDate}
              onChange={handleEndDateChange}
              onBlur={handleBlur}
              placeholder="Дата конца"
              className={`${styles.dateInput__placeholder} ${error ? styles.error : ''}`}
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


