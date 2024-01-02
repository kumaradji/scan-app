// components/TitleTextBlock/TitleTextBlock.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TitleTextBlock.module.scss';

const TitleTextBlock = ({ text, additionalStyles }) => {
  return (
    <div className={`${styles.titleTextBlock} ${additionalStyles}`}>
      {text}
    </div>
  );
};

TitleTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.string, // Дополнительные стили (необязательно)
};

export default TitleTextBlock;