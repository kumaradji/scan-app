// DateInput.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../../../assets/icons/calendar-icon.svg";

import styles from "./DateInput.module.scss";

function DateInput({ selectedDate, onChange, placeholder }) {
  return (
    <div className={styles.customDateInput}>
      <div className={styles.customDateInput__inputContainer}>
        <input
          readOnly
          value={selectedDate}
          placeholder={placeholder}
        />
        <img src={CalendarIcon} alt="Calendar Icon" />
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        customInput={<></>}
      />
    </div>
  );
}

export default DateInput;

