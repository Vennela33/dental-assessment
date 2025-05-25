import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className={styles.faqToggle}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}><p>{answer}</p></div>}
    </div>
  );
};

const FAQ = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No frequently asked questions available at the moment.</p>;
  }
  return (
    <div className={styles.faqList}>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
