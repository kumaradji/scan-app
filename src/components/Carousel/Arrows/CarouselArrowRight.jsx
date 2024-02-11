// components/Arrows/CarouselArrowRight.jsx
import React from 'react';
import {ReactComponent as RightArrowIcon} from '../../../assets/icons/icons8-шеврон-вправо.svg';

const CarouselArrowRight = ({ onClick }) => {
  const handleClick = () => {
    console.log('Нажата стрелка вправо');
    onClick();
  };

  return (
    <div className="arrow-right" onClick={handleClick}>
      <RightArrowIcon />
    </div>
  );
};

export default CarouselArrowRight;
