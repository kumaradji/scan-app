// DateInput.jsx
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateInput.module.scss";

function DateInput() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__inputContainer}>
        <label className={styles.container__datePickerContainer_dateLabel}>
          Дата начала:
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Выберите дату начала"
        />
      </div>

      <div className={styles.container__datePickerContainer}>
        <label className={styles.container__datePickerContainer_dateLabel}>
          Дата конца:
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="Выберите дату конца"
        />
      </div>
    </div>
  );
}

export default DateInput;