// components/Modal.js
import React from 'react';
import styles from './style';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>✖️</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
