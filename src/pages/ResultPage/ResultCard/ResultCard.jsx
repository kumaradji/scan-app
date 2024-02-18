// ResultCard/ResultCard.jsx

import React from 'react';
import styles from './ResultCard.module.scss';
import ResultCardRect from "../../../assets/images/ResultCard/ResultCardRect.png";

function ResultCard() {

  return (
    <section className={styles.resultCard}>

      <img
        className={styles.resultCard__resultCardRect}
        src={ResultCardRect} alt="ResultCard"
      />

    </section>
  );
}

export default ResultCard;
