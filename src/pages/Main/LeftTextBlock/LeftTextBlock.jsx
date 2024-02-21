// components/LeftTextBlock/LeftTextBlock.jsx

import styles from "./LeftTextBlock.module.scss";
import Button from "../../../components/UI/Button/Button";
import {Link} from "react-router-dom";
import {useAuth} from "../../LoginPage/Auth/AuthContext";
import {useState} from "react";
import {useCabinet} from "../../../hooks/useCabinet";

function LeftTextBlock ({ token }) {
  const { user, logout } = useAuth();
  const [hasToken, setHasToken] = useState(!!localStorage.getItem("accessToken"));
  const {showCabinet, setShowCabinet} = useCabinet(token);

  const handleLogout = () => {
    logout();
    setShowCabinet(false);
  }
  
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

      {showCabinet && (
        <Link to="/search">
          <Button className={styles.leftTextBlock__fetchButton}>
            <div className={styles.leftTextBlock__fetchButton__text}>
              Запросить данные
            </div>
          </Button>
        </Link>
      )}
    </main>
  );
};

export default LeftTextBlock;
