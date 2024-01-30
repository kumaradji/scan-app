// components/TitleTextBlock/TitleTextBlock.jsx

import React from 'react';
import PropTypes from 'prop-types';

const TitleTextBlock = ({ text, additionalStyles }) => {
  return (
    <div className={`${additionalStyles}`} style={{whiteSpace: "pre-line"}}>
      {text}
    </div>
  );
};

TitleTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.string,
};

export default TitleTextBlock;