import React from 'react';
import styles from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../images/icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseButtonClick = e => {
    if (e.target.tagName === 'BUTTON') {
      console.log(e.target.tagName);
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.moduleMainContainerOverlay}
      onClick={handleBackdropClick}
    >
      <div className={styles.moduleMainContainer}>
        <button
          className={styles.closeModalBtn}
          onClick={handleCloseButtonClick}
        />
        <div className={styles.mobileBack}>
          <button
            className={styles.closeModalBtnMobile}
            onClick={handleCloseButtonClick}
          />
        </div>
        <div className={styles.container}>{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
