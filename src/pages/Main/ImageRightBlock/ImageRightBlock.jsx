// ImageRightBlock.jsx
import React from 'react';
import styles from './ImageRightBlock.module.css';
import imgRightBlock from '../../../../src/assets/images/Img-right-block.svg';

const ImageRightBlock = () => {
  return (
    <div className={styles.imageRightBlock}>
      <img src={imgRightBlock} alt="Image-right" />
    </div>
  );
};

export default ImageRightBlock;
