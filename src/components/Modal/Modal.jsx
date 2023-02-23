import {useEffect } from 'react';
import css from '../Modal/Modal.module.css'

export function Modal({ src, onCloseClick}) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onCloseClick(``);
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onCloseClick();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
}


