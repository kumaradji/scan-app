import React, { useState } from 'react';
import CarouselCard from './CarouselCard';
import CarouselArrowLeft from './arrows/CarouselArrowLeft';
import CarouselArrowRight from './arrows/CarouselArrowRight';
import { allCards } from './cardsData'; // Импорт данных
import styles from './Carousel.module.scss'; // Импорт стилей

function Carousel() {
  const [position, setPosition] = useState(0);

  const prevCard = () => {
    setPosition((prevPosition) => (prevPosition - 1 + allCards.length) % allCards.length);
  };

  const nextCard = () => {
    setPosition((prevPosition) => (prevPosition + 1) % allCards.length);
  };

  console.log(allCards);

  return (
    <div className={styles.carousel}>
      <CarouselArrowLeft onClick={prevCard} />

      <div className={styles.cards} style={{ transform: `translateX(-${position * 430}px)` }}>
        {allCards.map((card, index) => (
          <CarouselCard key={index} {...card} />
        ))}
      </div>

      <CarouselArrowRight onClick={nextCard} />
    </div>
  );
}

export default Carousel;
