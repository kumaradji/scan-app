// SearchPageCharacters.jsx
import React from 'react';
import styles from './LoginPageCharacters.module.scss';
import imgLoginPageCharacters from '../../../../src/assets/images/LoginPageCharacters.svg';


const LoginPageCharacters = () => {
  return (
    <div className={styles.imgLoginPageCharacters}>
      <img src={imgLoginPageCharacters} alt="LoginPageCharacters-Image" />
    </div>
  );
};

export default LoginPageCharacters;
