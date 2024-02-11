// LoginPage/LoginTitleText/LoginTitleText.jsx

import React from 'react';
import TitleTextBlock from '../../../components/TitleTextBlock/TitleTextBlock';
import styles from './LoginTitleText.module.scss';

const LoginTitleText = () => {

  return (
    <TitleTextBlock
      text={`
        Для оформления подписки
        на тариф, необходимо
        авторизоваться.
      `}
      additionalStyles={styles.titleTextBlock}
    >
      <span className={styles.titleTextBlock__text}>
        {/* здесь текст не нужен */}
      </span>
    </TitleTextBlock>
  );

};

export default LoginTitleText;