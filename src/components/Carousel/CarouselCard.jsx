// CarouselCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss'; // Подключаем стили

function CarouselCard({ image, text }) {
  return (
    <div className={styles.card}>
      {/* Изображение (если оно нужно) */}
      {image && <img src={image} alt="Card" className={styles.image} />}

      {/* Иконка слева вверху */}
      <div className={styles.icon}></div>

      {/* Текстовый блок */}
      <div className={styles.textBlock}>
        {text}
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  image: PropTypes.string,  // Опционально
  text: PropTypes.string.isRequired,
};

export default CarouselCard;
