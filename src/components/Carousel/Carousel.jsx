// src/components/Carousel/Carousel.jsx
import React, { useState } from 'react';
import CarouselArrowLeft from './arrows/CarouselArrowLeft';
import CarouselArrowRight from './arrows/CarouselArrowRight';
import CarouselCard from './CarouselCard';

function Carousel({ cards }) {
  const [position, setPosition] = useState(0);

  const prevCard = () => {
    if (cards && Array.isArray(cards) && cards.length > 0) {
      setPosition((position - 1 + cards.length) % cards.length);
    }
  };

  const nextCard = () => {
    if (cards && Array.isArray(cards) && cards.length > 0) {
      setPosition((position + 1) % cards.length);
    }
  };

  console.log('Position:', position);

  return (
    <div className="carousel">
      <CarouselArrowLeft onClick={() => prevCard()} />

      <div className="cards" style={{ transform: `translateX(-${position * 320}px)` }}>
        {cards && Array.isArray(cards) && cards.length > 0 && (
          cards.map((card, index) => (
            <CarouselCard key={index} {...card} />
          ))
        )}
      </div>

      <CarouselArrowRight onClick={() => nextCard()} />
    </div>
  );
}

export default Carousel;
