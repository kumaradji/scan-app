// UniversalCard/UniversalCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './UniversalCard.module.scss';

function UniversalCard({ title, icon, items, price, buttonText, backgroundColor }) {
  return (
    <div className={`${styles.container} ${backgroundColor}`}>
      {/* Ваши уникальные стили или элементы */}
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>

      <div className={styles.includedItems}>
        <div className={styles.item}>В тариф входит:</div>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </div>

      <div className={styles.price}>{price}</div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
}

UniversalCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired, // node для передачи компонента в качестве иконки
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default UniversalCard;
