import React, {useState} from 'react';
import CarouselCard from './CarouselCard';
import CarouselArrowLeft from './Arrows/CarouselArrowLeft';
import CarouselArrowRight from './Arrows/CarouselArrowRight';
import {allCards} from './cardsData'; // Импорт данных
import styles from './Carousel.module.scss'; // Импорт стилей

function Carousel() {
  const [position, setPosition] = useState(0);

  const prevCard = () => {
    setPosition((prevPosition) => (prevPosition - 1 + allCards.length) % allCards.length);
  };

  const nextCard = () => {
    setPosition((prevPosition) => (prevPosition + 1) % allCards.length);
  };

  return (
    <div className={styles.carousel}>

      <div className={styles.carousel__leftArrow}>
        <CarouselArrowLeft onClick={prevCard}/>
      </div>

      <div className={styles.carousel__cardsWrapper}>
        <div
          className={styles.carousel__cardsWrapper__cards}
          style={{transform: `translateX(-${position * 430}px)`}}
        >
          {allCards.map((card, index) => (
            <CarouselCard key={index} {...card} />
          ))}
        </div>
      </div>

      <div className={styles.carousel__rightArrow}>
        <CarouselArrowRight onClick={nextCard}/>
      </div>
    </div>
  );
}

export default Carousel;
