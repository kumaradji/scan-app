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
    <>
      {startDate ?
        `${startDate.getDate()<10?'0'+startDate.getDate():startDate.getDate()}.${(startDate.getMonth() + 1)<10?'0'+(startDate.getMonth() + 1):(startDate.getMonth() + 1)}.${startDate.getFullYear()}`
        : ''}

      <section className={styles.dateInput}>
        <div className={styles.dateInput__startDate}>
          <div className={styles.dateInput__inputWrapper}>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              customInput={
                <span className={styles.dateInput__placeholder}>
                {startDate ? `${startDate.getDate()}.${startDate.getMonth() + 1}.${startDate.getFullYear()}` : 'Дата начала'}
              </span>
              }
            />
            <img
              className={styles.dateInput__dateInputIcon}
              src={dateInputIcon}
              alt=""
            />
          </div>
        </div>

        {endDate ?
          `${endDate.getDate()<10?'0'+endDate.getDate():endDate.getDate()}.${(endDate.getMonth() + 1)<10?'0'+(endDate.getMonth() + 1):(endDate.getMonth() + 1)}.${endDate.getFullYear()}`
          : ''}


        <div className={styles.dateInput__endDate}>
          <div className={styles.dateInput__inputWrapper}>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              customInput={
                <span className={styles.dateInput__placeholder}>
                {endDate ? `${endDate.getDate()}.${endDate.getMonth() + 1}.${endDate.getFullYear()}` : 'Дата конца'}
              </span>
              }
            />
            <img
              className={styles.dateInput__dateInputIcon}
              src={dateInputIcon}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default DateInput;
