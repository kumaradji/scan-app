// CheckboxList.jsx
import React, {useState} from 'react';
import styles from './CheckboxList.module.scss';
import imgTicket from '../../../../assets/icons/Vector.svg';

const CheckboxList = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleToggle = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  return (
    <ul className={styles.checkboxList}>
      {items.map((item, index) => (
        <li key={index}>
          <label
            className={`${styles.checkboxList__label} ${
              checkedItems[index] ? styles.checkboxList__label_checked : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <span
              className={`${styles.checkboxList__checkbox} ${
                checkedItems[index] ? styles.checkboxList__checkbox_checked : ''
              }`}
            >
              {checkedItems[index] && (
                <img
                  className={styles.checkboxList__icon}
                  src={imgTicket}
                  alt="Галочка"
                />
              )}
            </span>
            <span
              className={`${styles.checkboxList__text} ${
                checkedItems[index] ? styles.checkboxList__text_checked : ''
              }`}
            >
              {item}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;