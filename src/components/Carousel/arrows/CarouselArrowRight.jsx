// CarouselArrowRight.jsx
import React from 'react';
import { ReactComponent as RightArrowIcon } from '../../../assets/icons/icons8-шеврон-вправо.svg';
import styles from './CarouselArrow.module.scss'; // Импорт стилей

function CarouselArrowRight({ onClick }) {
  const handleClick = () => {
    console.log('Нажата стрелка вправо');
    onClick();
  };

  return (
    <div className={`${styles.arrow} ${styles.right}`} onClick={handleClick}>
      <RightArrowIcon />
    </div>
  );
}

export default CarouselArrowRight;
