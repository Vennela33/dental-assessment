import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, imageUrl, description, children, onClick }) => {
  const cardContent = (
    <>
      {imageUrl && <img src={imageUrl} alt={title || 'Card image'} className={styles.cardImage} />}
      <div className={styles.cardBody}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {description && <p className={styles.cardDescription}>{description}</p>}
        {children}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={`${styles.card} ${styles.clickableCard}`} aria-label={`More details about ${title}`}>
        {cardContent}
      </button>
    );
  }

  return (
    <div className={styles.card}>
      {cardContent}
    </div>
  );
};

export default Card;