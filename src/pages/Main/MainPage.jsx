// pages/Main/MainPage.jsx

import React, {useEffect} from "react";
import LeftTextBlock from "./LeftTextBlock/LeftTextBlock";
import ImageRightBlock from "./ImageRightBlock/ImageRightBlock";
import FirstTitleText from "./FirstTitleText/FirstTitleText";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./MainPage.module.scss";
import BeginnerTariffCard from "./BeginnerTariffCard/BeginnerTariffCard";
import BusinessTariffCard from "./BusinessTariffCard/BusinessTariffCard";
import ProTariffCard from "./ProTariffCard/ProTariffCard";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../LoginPage/Auth/AuthContext";
import imgBlueCloud from "../../../src/assets/images/blueCloudImage.jpg";
import SecondTitleText from "./SecondTitleText";

const MainPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <p>Вы не аутентифицированы. Перенаправление на страницу входа...</p>;
  }

  return (
    <main className={styles.mainPage}>
      <div className={styles.mainPage__upperBlocks}>
        <LeftTextBlock />
        <ImageRightBlock />
      </div>

      <FirstTitleText />
      <Carousel />

      <div className={styles.mainPage__blueCloudImage}>
        <img src={imgBlueCloud} alt="Blue-Cloud-Image" />
      </div>

      <SecondTitleText />

      <section className={styles.mainPage__tariffCardSection}>
        <BeginnerTariffCard />
        <ProTariffCard />
        <BusinessTariffCard />
      </section>
    </main>
  );
};

export default MainPage;
