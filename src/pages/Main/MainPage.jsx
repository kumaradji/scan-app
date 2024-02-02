// pages/Main/MainPage.jsx

import React, {useEffect} from 'react';
import LeftTextBlock from './LeftTextBlock/LeftTextBlock';
import ImageRightBlock from './ImageRightBlock/ImageRightBlock';
import MainTitleTextBlock from './MainTitleTextBlock/MainTitleTextBlock';
import Carousel from '../../components/Carousel/Carousel';
import styles from './MainPage.module.scss';
import '../../styles/fonts.scss';
import BlueCloudImage from "./BlueCloudImage/BlueCloudImage";
import TitleTextBlock02 from "./SecondTitleTextBlock/SecondTitleTextBlock";
import BeginnerTariffCard from "./BeginnerTariffCard/BeginnerTariffCard";
import BusinessTariffCard from "./BusinessTariffCard/BusinessTariffCard";
import ProTariffCard from "./ProTariffCard/ProTariffCard";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../LoginPage/Auth/AuthContext";

const MainPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <p>Вы не аутентифицированы. Перенаправление на страницу входа...</p>;
  }

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__upperBlocks}>
        <LeftTextBlock/>
        <ImageRightBlock/>
      </div>

      <MainTitleTextBlock/>
      <Carousel/>

      <BlueCloudImage/>

      {/*<img className={styles.mainPage__blueCloudImageM} src={BlueCloudImageM} alt="BlueCloudImageM"/>*/}

      <TitleTextBlock02/>

      <section className={styles.mainPage__tariffCardSection}>
        <BeginnerTariffCard/>
        <ProTariffCard/>
        <BusinessTariffCard/>
      </section>

    </div>
  );
};

export default MainPage;
