// ResultCard/ResultCard.jsx

import React from 'react';
import styles from './ResultCard.module.scss';
import ResultCardRect from "../../../assets/images/ResultCard/ResultCardRect.png";

function ResultCard({ publication }) {

  return (
    <section className={styles.resultCard}>
      <img
        className={styles.resultCard__resultCardRect}
        src={ResultCardRect}
        alt="ResultCard"
      />

      {/*/!* Используем компонент PublicationCard и передаем ему данные публикации *!/*/}
      {/*<PublicationCard publication={publication} />*/}
    </section>
  );
}

export default ResultCard;
