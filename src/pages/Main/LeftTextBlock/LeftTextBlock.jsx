// components/LeftTextBlock/LeftTextBlock.jsx

import React from 'react';
import styles from './LeftTextBlock.module.scss';
import Button from '../../../components/UI/Button/Button';

const LeftTextBlock = () => {
  return (
    <section className={styles.leftTextBlock}>
      <div className={styles.leftText}>
        <p>
          сервис по поиску публикаций
          <br />
          о компании
          <br />
          по его ИНН
        </p>
      </div>
      <div className={styles.leftTextUnderBlock}>
        <div className={styles.leftSmallText}>
          Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </div>

        <Button className={styles.buttonBlueUnder}>
          <div className={styles.buttonBlueUnderText}>
            Запросить данные
          </div>
        </Button>
      </div>

    </section>
  );
};

export default LeftTextBlock;
