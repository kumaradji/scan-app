// CarouselArrowLeft.jsx
import React from 'react';
import { ReactComponent as LeftArrowIcon } from '../../../assets/icons/icons8-шеврон-влево.svg';
import styles from './CarouselArrow.module.scss'; // Импорт стилей

function CarouselArrowLeft({ onClick }) {
  const handleClick = () => {
    console.log('Нажата стрелка влево');
    onClick();
  };

  return (
    <div className={`${styles.arrow} ${styles.left}`} onClick={handleClick}>
      <LeftArrowIcon />
    </div>
  );
}

export default CarouselArrowLeft;
