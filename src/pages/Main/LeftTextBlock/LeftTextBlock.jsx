// components/LeftTextBlock/LeftTextBlock.jsx

import React, {useState} from "react";
import styles from "./LeftTextBlock.module.scss";
import Button from "../../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import {RequireAuth} from "../../../components/RequireAuth/RequireAuth";
import {useAuth} from "../../LoginPage/Auth/AuthContext";

const LeftTextBlock = () => {
  const { isAuthenticated } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => {
    setIsActive(true);
  };
  const onMouseUp = () => {
    setIsActive(false);
  };

  return (
    <main className={styles.leftTextBlock}>
      <div className={styles.leftTextBlock__title}>
        <p>
          сервис по поиску публикаций
          <br />
          о компании
          <br />
          по его ИНН
        </p>
      </div>
      <div className={styles.leftTextBlock__leftSmallText}>
        Комплексный анализ публикаций, получение данных в формате PDF на
        электронную почту.
      </div>

      <RequireAuth isAuthenticated={isAuthenticated}>
        <Link to="/search">
          <Button
            className={`
            ${styles.leftTextBlock__fetchButton}
            ${isActive && styles.leftTextBlock__fetchButton_active}
            `}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            <div className={styles.leftTextBlock__fetchButton__text}>
              Запросить данные
            </div>
          </Button>
        </Link>
      </RequireAuth>
    </main>
  );
};

export default LeftTextBlock;
