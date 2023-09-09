import React from 'react';
import styles from './style.module.css';

const AnimatedButton = ({ title }) => {
  return <div className={styles.button}>{title}</div>;
};

export default AnimatedButton;
