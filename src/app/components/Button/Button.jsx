'use client';
import { useRef, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';

export default function Button({ text, href }) {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  const handleHover = () => {
    const buttonWidth = buttonRef.current.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    const transformValue = buttonWidth - iconWidth - 16; // adjust for padding/margin
    iconRef.current.style.transform = `translateX(${transformValue}px)`;
  };

  const handleLeave = () => {
    iconRef.current.style.transform = 'translateX(0)';
  };

  return (
    <button
      ref={buttonRef}
      className={styles.button}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link href={href}>
        <div className={styles.buttonIcon} ref={iconRef}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1225 7.59909C19.4545 7.26714 19.4545 6.72895 19.1225 6.39701L13.7132 0.987639C13.3812 0.655693 12.843 0.655693 12.5111 0.987639C12.1791 1.31958 12.1791 1.85777 12.5111 2.18972L17.3194 6.99805L12.5111 11.8064C12.1791 12.1383 12.1791 12.6765 12.5111 13.0085C12.843 13.3404 13.3812 13.3404 13.7132 13.0085L19.1225 7.59909ZM0.130859 7.84805L18.5215 7.84805V6.14805L0.130859 6.14805L0.130859 7.84805Z"
              fill="#506758"
            />
          </svg>
        </div>
        <span className={styles.buttonText}>{text}</span>
      </Link>
    </button>
  );
}
