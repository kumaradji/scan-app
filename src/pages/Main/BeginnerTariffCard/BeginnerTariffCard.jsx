// BeginnerTariffCard/BeginnerTariffCard.jsx

import styles from "./BeginnerTariffCard.module.scss";
import Button from "../../../components/UI/Button/Button";
import LightBulbIcon from "../../../assets/icons/LightBulbTariff.svg";
import ItemsList from "../../../assets/images/BigginerTariffList.jpeg";
import {useCabinet} from "../../../hooks/useCabinet";

function BeginnerTariffCard({ tokenFromProps }) {
  const {showCabinet} = useCabinet(tokenFromProps);

  // return (
  //   <div>
  //     {showCabinet ? 'Показать кабинет' : 'Скрыть кабинет'}
  //   </div>
  // );

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
        {showCabinet ? (
          <>
            <div className={styles.beginnerTariffCard__blueStripe}/>
            <div className={styles.beginnerTariffCard__currentTariffLabel}>
              Текущий тариф
            </div>
          </>
        ) : null}
      </div>

      <div>
        {showCabinet ? (
          // Если пользователь авторизован, отображаем кнопку для личного кабинета
          <div className={styles.beginnerTariffCard__personalCabinetButton}>
            <Button className={styles.beginnerTariffCard__personalCabinetButton_text}>
              Перейти в личный кабинет
            </Button>
          </div>
        ) : (
          // Иначе отображаем кнопку "Подробнее"
          <div className={styles.beginnerTariffCard__moreButton}>
            <Button className={styles.beginnerTariffCard__moreButton_text}>
              Подробнее
            </Button>
          </div>
        )}
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
