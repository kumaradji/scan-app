import React, { useReducer } from 'react';
import CarouselCard from './CarouselCard';
import CarouselArrowLeft from './arrows/CarouselArrowLeft';
import CarouselArrowRight from './arrows/CarouselArrowRight';
import { allCards } from './cardsData'; // Импорт данных
import styles from './Carousel.module.scss'; // Импорт стилей

const initialState = {
  position: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'PREV_CARD':
      return {
        ...state,
        position: (state.position - 1 + allCards.length) % allCards.length,
      };
    case 'NEXT_CARD':
      return {
        ...state,
        position: (state.position + 1) % allCards.length,
      };
    default:
      return state;
  }
}

function Carousel() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.carousel}>
      <CarouselArrowLeft onClick={() => dispatch({ type: 'PREV_CARD' })} />

      <div className={styles.cards} style={{ transform: `translateX(-${state.position * 430}px)` }}>
        {allCards.map((card, index) => (
          <CarouselCard key={index} {...card} />
        ))}
      </div>

      <CarouselArrowRight onClick={() => dispatch({ type: 'NEXT_CARD' })} />
    </div>
  );
}
