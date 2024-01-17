// Loader.jsx
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderContainer}>
      <div className={styles.loaderImage}>
        <img src="/src/assets/images/Header-Loader.svg" alt="Loading Animation" />
      </div>
    </div>
  </div>
);

export default Loader;
