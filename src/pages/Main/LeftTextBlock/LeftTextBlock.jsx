// components/LeftTextBlock/LeftTextBlock.jsx

import React from 'react';
import styles from './LeftTextBlock.module.scss';
import Button from '../../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import { RequireAuth } from '../../../components/RequireAuth/RequireAuth';
import { useAuth } from '../../LoginPage/Auth/AuthContext';

const LeftTextBlock = () => {
  const { isAuthenticated } = useAuth();

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

        <RequireAuth isAuthenticated={isAuthenticated}>
          <Link to="/search">
            <Button >
              <div className={styles.buttonBlueUnderText}>
                Запросить данные
              </div>
            </Button>
          </Link>
        </RequireAuth>
      </div>
    </section>
  );
};

export default LeftTextBlock;
