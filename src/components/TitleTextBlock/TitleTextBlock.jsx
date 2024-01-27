// components/TitleTextBlock/TitleTextBlock.jsx

import React from 'react';
import PropTypes from 'prop-types';

const TitleTextBlock = ({ text, additionalStyles }) => {
  return (
    <div className={`${additionalStyles}`}>
      {text}
    </div>
  );
};

TitleTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.string,
};

export default TitleTextBlock;