// BeginnerTariffCard/BeginnerTariffCard.jsx

import styles from "./BeginnerTariffCard.module.scss";
import LightBulbIcon from "../../../assets/icons/LightBulbTariff.svg";
import ItemsList from "../../../assets/images/BigginerTariffList.jpeg";
import {useAuth} from "../../LoginPage/Auth/AuthContext";

function BeginnerTariffCard() {
  const { isAuthenticated } = useAuth();

  return (
    <section className={styles.beginnerTariffCard}>
      <div className={styles.beginnerTariffCard__orangeTop}/>
      <img
        className={styles.beginnerTariffCard__orangeTop_icon}
        src={LightBulbIcon}
        alt="Lightbulb-Icon"
      />

      <div className={styles.beginnerTariffCard__title}>
        Beginner
      </div>


      <div>
        {isAuthenticated ? (
          <>
            <div className={styles.beginnerTariffCard__blueStripe}/>
            <div className={styles.beginnerTariffCard__currentTariffLabel}>
              Текущий тариф
            </div>
          </>
        ) : null}
      </div>


      <div>
        {isAuthenticated ? (
          // Если пользователь авторизован, отображаем кнопку для личного кабинета
          <div className={styles.beginnerTariffCard__personalCabinetButton}>
            <button className={styles.beginnerTariffCard__personalCabinetButton_text}>
              Перейти в личный кабинет
            </button>
          </div>
        ) : null}

        {!isAuthenticated ? (
          // Иначе отображаем кнопку "Подробнее"
          <div className={styles.beginnerTariffCard__moreButton}>
            <button className={styles.beginnerTariffCard__moreButton_text}>
              Подробнее
            </button>
          </div>
        ) : null}
      </div>

      <div className={styles.beginnerTariffCard__infoTitle}>
        Для небольшого исследования
      </div>

      <div className={styles.beginnerTariffCard__priceTitle}>
        <div className={styles.beginnerTariffCard__priceTitle_infoText}>
          <span className={styles.beginnerTariffCard__priceTitle_price}>
            799 ₽
          </span>
          <span className={styles.beginnerTariffCard__priceTitle_priceHigh}>
            1 200 ₽
          </span>
          <p className={styles.beginnerTariffCard__priceTitle_currency}>
            или 150 ₽/мес. при рассрочке на 24 мес.
          </p>
        </div>
      </div>

      <img
        className={styles.beginnerTariffCard__tariffItemsList}
        src={ItemsList}
        alt="ItenmsList"
      />
    </section>
  );
}

export default BeginnerTariffCard;
