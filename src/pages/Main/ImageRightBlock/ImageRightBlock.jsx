// ImageRightBlock.jsx
import React from 'react';
import styles from './ImageRightBlock.module.scss';
import imgRightBlock from '../../../../src/assets/images/Img-right-block.svg';


const ImageRightBlock: string = () => {
  return (
    <div className={styles.imageRightBlock}>
      <img src={imgRightBlock} alt="Image-right" />
    </div>
  );
};

export default ImageRightBlock;
