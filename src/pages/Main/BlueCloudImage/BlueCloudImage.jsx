// ImageRightBlock.jsx
import React from 'react';
import styles from './BlueCloudImage.module.scss';
import imgBlueCloud from '../../../../src/assets/images/Group 14.svg';


const BlueCloudImage: string = () => {
  return (
    <div className={styles.imgBlueCloudImage}>
      <img src={imgBlueCloud} alt="Blue-Cloud-Image" />
    </div>
  );
};

export default BlueCloudImage;
