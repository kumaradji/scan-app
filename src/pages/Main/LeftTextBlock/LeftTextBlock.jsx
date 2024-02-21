// components/LeftTextBlock/LeftTextBlock.jsx

import styles from "./LeftTextBlock.module.scss";
import Button from "../../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import {RequireAuth} from "../../../components/RequireAuth/RequireAuth";
import {useAuth} from "../../LoginPage/Auth/AuthContext";
import {useEffect, useState} from "react";

const LeftTextBlock = () => {
  const { isAuthenticated, user } = useAuth();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Проверяем наличие токена в localStorage
    const token = localStorage.getItem("accessToken");
    setHasToken(!!token);
  }, []);

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
        {/* Проверяем наличие токена в localStorage */}
        {hasToken && (
          <Link to="/search">
            <Button className={styles.leftTextBlock__fetchButton}>
              <div className={styles.leftTextBlock__fetchButton__text}>
                Запросить данные
              </div>
            </Button>
          </Link>
        )}
      </RequireAuth>
    </main>
  );
};

export default LeftTextBlock;
