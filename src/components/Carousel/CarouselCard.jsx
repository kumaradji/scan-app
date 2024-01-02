// components/CarouselCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss'; // Импорт стилей

function CarouselCard({ icon, text }) {
  if (!icon) {
    console.warn('Icon is not provided');
  }

  return (
    <div className={styles.card}>
      <img src={icon} alt="Card Icon" className={styles.icon} />
      <div className={styles.textBlock}>{text}</div>
    </div>
  );
}

CarouselCard.propTypes = {
  icon: PropTypes.string.isRequired, // Предполагается, что иконка предоставляется как строка с путем к изображению
  text: PropTypes.string.isRequired,
};

export default CarouselCard;
