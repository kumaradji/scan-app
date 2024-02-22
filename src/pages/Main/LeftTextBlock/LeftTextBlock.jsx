// components/LeftTextBlock/LeftTextBlock.jsx

import {useAuth} from "../../LoginPage/Auth/AuthContext";
import {Link} from "react-router-dom";
import Button from "../../../components/UI/Button";
import styles from './LeftTextBlock.module.scss';

function LeftTextBlock() {
  const { isAuthenticated } = useAuth();

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

      {isAuthenticated ? (
        <Link to="/search">
          <Button className={styles.leftTextBlock__fetchButton}>
            <div className={styles.leftTextBlock__fetchButton__text}>
              Запросить данные
            </div>
          </Button>
        </Link>
      ) : null}
    </main>
  );
}

export default LeftTextBlock;
