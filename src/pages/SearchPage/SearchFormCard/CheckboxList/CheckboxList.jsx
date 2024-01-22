import React from 'react';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import styles from './CheckboxList.module.scss';

const CheckboxList = ({ items, checkedItems, onToggle }) => (
  <ul>
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
