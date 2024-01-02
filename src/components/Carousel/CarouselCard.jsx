// components/CarouselCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

function CarouselCard({ icon, text }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt="Card Icon" className={styles.icon} />
      <div className={styles.textBlock}>{text}</div>
    </div>
  );
}

CarouselCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CarouselCard;
