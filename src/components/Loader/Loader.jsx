// Loader.jsx
import React from 'react';
import styles from './Loader.module.scss';
import LoaderImg from "../../assets/images/Loader.svg";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loader__loaderImage}>
      <img src={LoaderImg} alt="Loading Animation"/>
    </div>
  </div>
);

export default Loader;
