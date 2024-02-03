// DateInput.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateInput.module.scss";
import useSearchFormHook from "../../../../hooks/useSearchFormHook";

function DateInput({ selectedDate, onChange, placeholder }) {
  const {
    handleEndDateChange,
    handleStartDateChange,
  } = useSearchFormHook();

  return (
    <div className={styles.container}>
      <div className={styles.container__inputContainer}>
        <label className={styles.container__datePickerContainer_dateLabel}>
          Дата начала:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleStartDateChange}
          placeholderText={placeholder}
        />
      </div>

      <div className={styles.container__datePickerContainer}>
        <label className={styles.container__datePickerContainer_dateLabel}>
          Дата конца:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleEndDateChange}
          placeholderText={placeholder}
        />
      </div>
    </div>
  );
}

export default DateInput;
