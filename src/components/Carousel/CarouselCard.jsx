// components/CarouselCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss'; // Импорт стилей

function CarouselCard({ icon, text }) {
  if (!icon) {
    console.warn('Icon is not provided');
  }

  return (
    <div className={styles.carousel__card}>
      <img src={icon} alt="Card Icon" className={styles.carousel__icon} />
      <div className={styles.carousel__textBlock}>{text}</div>
    </div>
  );
}

CarouselCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CarouselCard;
