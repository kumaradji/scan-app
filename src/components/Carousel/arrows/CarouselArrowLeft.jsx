// components/arrows/CarouselArrowLeft.jsx
import React from 'react';
import { ReactComponent as LeftArrowIcon } from '../../../assets/icons/icons8-шеврон-влево.svg';

const CarouselArrowLeft = ({ onClick }) => {
  const handleClick = () => {
    console.log('Нажата стрелка влево');
    onClick();
  };

  return (
    <div className="arrow-left" onClick={handleClick}>
      <LeftArrowIcon />
    </div>
  );
};

export default CarouselArrowLeft;
