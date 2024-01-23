// CheckboxList.jsx
import React from 'react';
import styles from './CheckboxList.module.scss';
import imgTicket from '../../../../assets/icons/Vector.svg';


const CheckboxList = ({ items, checkedItems, onToggle }) => (
  <ul className={styles.checkboxList}>
    {items.map((item, index) => (
      <li key={index} style={{ opacity: checkedItems[index] ? 1 : 0.4 }}>
        <label className={styles.checkboxList__item__label}>
          <input
            type="checkbox"
            checked={checkedItems[index]}
            onChange={() => onToggle(index)}
          />
          <span className={styles.checkboxList__item__label__text}>{item}</span>
          {checkedItems[index] && (
            <img
              className={styles.checkboxList__item__label__icon}
              src={imgTicket}
              alt="Галочка"
            />
          )}
        </label>
      </li>
    ))}
  </ul>
);

export default CheckboxList;
