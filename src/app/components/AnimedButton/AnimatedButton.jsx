import React from 'react';
import styles from './style.module.css';

const AnimatedButton = ({ title, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {title}
    </div>
  );
};

export default AnimatedButton;
