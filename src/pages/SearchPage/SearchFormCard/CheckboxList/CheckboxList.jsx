import React from 'react';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import styles from '../SearchFormCard.module.scss';

const CheckboxList = ({ items, checkedItems, onToggle }) => (
  <ul className={styles.checkboxList} >
    {items.map((item, index) => (
      <CheckboxItem
        key={index}
        label={item}
        checked={checkedItems[index]}
        onChange={() => onToggle(index)}
      />
    ))}
  </ul>
);

export default CheckboxList;
