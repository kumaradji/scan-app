// DateInput.jsx
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateInput.module.scss";
import dateInputIcon from "../../../../assets/icons/dateInputIcon.svg";

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
    <div className={styles.dateInput}>
      <div className={styles.dateInput__firstDate}>
        {/*<label className={styles.dateInput__dateLabel}>Дата начала:</label>*/}
        <div className={styles.dateInput__inputWrapper}>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            placeholderText={
              <span className={styles.dateInput__placeholder}>Дата начала</span>
            }
          />
          <img
            className={styles.dateInput__dateInputIcon}
            src={dateInputIcon}
            alt=""
          />
        </div>
      </div>

      <div className={styles.dateInput__secondDate}>
        {/*<label className={styles.dateInput__dateLabel}>Дата конца:</label>*/}
        <div className={styles.dateInput__inputWrapper}>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            placeholderText={
              <span className={styles.dateInput__placeholder}>Дата конца</span>
            }
          />
          <img
            className={styles.dateInput__dateInputIcon}
            src={dateInputIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DateInput;