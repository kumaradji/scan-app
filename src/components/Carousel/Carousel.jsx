// components/Carousel.jsx
import React, { useState } from 'react';
import CarouselCard from './CarouselCard';
import CarouselArrowLeft from './arrows/CarouselArrowLeft';
import CarouselArrowRight from './arrows/CarouselArrowRight';
import { cardsData } from './cardsData'; // Импорт данных
import styles from './Carousel.module.scss'; // Импорт стилей

function Carousel() {
  const [position, setPosition] = useState(0);

  const prevCard = () => {
    setPosition((position - 1 + cardsData.length) % cardsData.length);
  };

  const nextCard = () => {
    setPosition((position + 1) % cardsData.length);
  };

  return (
    <div className={styles.carousel}>
      <CarouselArrowLeft onClick={prevCard} />

      <div className={styles.cards} style={{ transform: `translateX(-${position * 320}px)` }}>
        {cardsData.map((card, index) => (
          <CarouselCard key={index} {...card} />
        ))}
      </div>

      <CarouselArrowRight onClick={nextCard} />
    </div>
  );
}

export default Carousel;
